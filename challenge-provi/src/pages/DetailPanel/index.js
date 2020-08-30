import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import Installments from "../../components/Graphics/Installments";
import TotalPaid from "../../components/Graphics/TotalPaid";

import styled from "styled-components";
import { Typography } from "@material-ui/core";

const ContentWrapper = styled.div`
  /* background-color: purple; */
  display: flex;
  flex-direction: row;
  /* max-width: 1080px; */
  align-items: center;
  align-self: center;

  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: column;
  }
`;

const GraphicWrapper = styled.div`
  margin: 0;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: center;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const AsideWrapper = styled.div`
  background-color: #eee;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 12px;
  text-decoration: none;
  width: 25%;
  height: 100vh;

  @media (max-width: 1200px) {
    width: 100%;
    height: 40vh;
  }
`;

function DetailPanel() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5c923b0932000029056bce39")
      .then((res) => res.json())
      .then((installmentsInfo) => setData(installmentsInfo));
  }, []);

  const total = data.amountTaken + data.totalAmountInTaxes;

  return (
    <>
      <Appbar />
      <Typography variant="h6" align="left">
        Painel de empréstimos
      </Typography>

      <ContentWrapper>
        <AsideWrapper>
          <p>Valor total do empréstimo</p>
          <p>R${total}</p>
          <hr />
          <p>Juros total</p>
          <p>R${data.totalAmountInTaxes}</p>
          <hr />
          <p>Taxa de juros mensal</p>
          <p>{data.monthlyInterest}%</p>
          <hr />
          <p>Valor total pago</p>
          <p>R${data.amountPayd}</p>
        </AsideWrapper>

        <GraphicWrapper>
          <Installments installments={data.installments} />
        </GraphicWrapper>
        <GraphicWrapper>
          <TotalPaid data={data} />
        </GraphicWrapper>
      </ContentWrapper>
    </>
  );
}

export default DetailPanel;
