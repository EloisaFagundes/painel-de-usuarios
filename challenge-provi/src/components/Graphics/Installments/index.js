import React from "react";
import { Chart } from "react-google-charts";

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
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={newArray}
        options={{
          title: "Parcelas",
          backgroundColor: "#ffff",
          vAxis: { title: "Valor" },
          hAxis: { title: "Meses" },
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
