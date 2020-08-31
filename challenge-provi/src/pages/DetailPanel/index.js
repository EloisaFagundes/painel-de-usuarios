import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import Installments from "../../components/Graphics/Installments";
import TotalPaid from "../../components/Graphics/TotalPaid";

import styled from "styled-components";
import { Typography } from "@material-ui/core";

const BackgroundStyle = styled.body`
  background-color: #01163e;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  @media(max-width: 1200 px){
    height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: column;
  }
`;

const GraphicWrapper = styled.div`
  /* background-color: red; */
  margin: 2vw;
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const AsideWrapper = styled.div`
  background-color: #eee;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 12px ;
  text-decoration: none;
  width: 600px;
  height: 100vh;

  @media (max-width: 1200px) {
    width: 100vw;
    height: 60vh;
    padding: 30px;
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
      <Appbar page="detail" />
      <BackgroundStyle>
        <ContentWrapper>
          <AsideWrapper>
            <Typography variant="subtitle1" align="left" color="textSecondary">
              Painel de empréstimos
            </Typography>
            <hr />
            <hr />
            <Typography variant="overline">Valor total</Typography>
            <Typography variant="h5" color="secondary">
              {total?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </Typography>
            <hr />
            <Typography variant="overline">Valor Juros Total</Typography>
            <Typography variant="h6" color="secondary">
              {data?.totalAmountInTaxes?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </Typography>
            <hr />
            <Typography variant="overline">Taxa de juros mensal</Typography>
            <Typography variant="h6" color="secondary">
              {data?.monthlyInterest}%
            </Typography>
            <hr />
            <Typography variant="overline">Valor total pago</Typography>
            <Typography variant="h6" color="secondary">
              {data?.amountPayd?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </Typography>
          </AsideWrapper>

          <GraphicWrapper>
            <Installments installments={data.installments} />
          </GraphicWrapper>
          <GraphicWrapper>
            <TotalPaid data={data} />
          </GraphicWrapper>
        </ContentWrapper>
      </BackgroundStyle>
    </>
  );
}

export default DetailPanel;
