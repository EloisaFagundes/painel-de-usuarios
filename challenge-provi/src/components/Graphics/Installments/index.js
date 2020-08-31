import React from "react";
import { ChartStyled } from "./styles";

function Installments({ installments }) {
  let newArray = [["Meses", "Pago", "Não pago"]];

  for (let installment in installments) {
    let obj = installments[installment];
    let array = [];
    if (obj.payd === false) {
      array = [obj.dueDate, 0, obj.value];
    } else {
      array = [obj.dueDate, obj.value, 0];
    }
    newArray.push(array);
  }

  return (
    <div>
      <ChartStyled
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={newArray}
        options={{
          title: "Parcelas",
          backgroundColor: "#ffff",
          vAxis: { title: "Valor", textPosition: "bottom" },
          hAxis: { title: "Meses", textPosition: "bottom" },
          legend: { position: "top" },
          titlePosition: "top",
          axisTitlesPosition: "bottom",
          chartArea: { width: "70%", height: "70%" },
          titleTextStyle: { fontSize: 20, color: "#01163e", bold: true },
          seriesType: "bars",
          series: { 5: { type: "line" } },
          colors: ["#01163e", "#C10040"],
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default Installments;
