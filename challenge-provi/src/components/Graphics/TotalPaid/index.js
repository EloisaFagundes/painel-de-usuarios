import React from "react";
import { Chart } from "react-google-charts";

function TotalPaid({ data }) {
  const nonPayd = data.amountTaken + data.totalAmountInTaxes - data.amountPayd;

  return (
    <div>
      <Chart
        width={"400px"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Evolução do pagamento", "Valor (em reais)"],
          ["Pago", data.amountPayd],
          ["Não pago", nonPayd],
        ]}
        options={{
          legend: "none",
          pieSliceText: "label",
          title: "Evolução dos Pagamentos",
          pieStartAngle: 100,
          colors: ["#01163e", "#C10040"],
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
}

export default TotalPaid;
