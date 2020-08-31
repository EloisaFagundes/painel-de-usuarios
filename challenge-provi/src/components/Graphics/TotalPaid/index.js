import React from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";

export const ChartStyled = styled(Chart)`
  width: 25vw;
  height: 60vh;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

function TotalPaid({ data }) {
  const nonPayd = data.amountTaken + data.totalAmountInTaxes - data.amountPayd;

  return (
    <div>
      <ChartStyled
        // width={"30vw"}
        // height={"44vh"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Evolução do pagamento", "Valor (em reais)"],
          ["Pago", data.amountPayd],
          ["Não pago", nonPayd],
        ]}
        options={{
          pieSliceText: "label",
          title: "Evolução dos Pagamentos",
          pieStartAngle: 100,
          colors: ["#01163e", "#C10040"],

          chartArea: { width: "70%", height: "70%" },
          legend: { position: "right" },
          titlePosition: "top",
          axisTitlesPosition: "in",
          hAxis: { textPosition: "bottom" },
          vAxis: { textPosition: "bottom" },
          titleTextStyle: { fontSize: 20, color: "#01163e", bold: true },
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
}

export default TotalPaid;
