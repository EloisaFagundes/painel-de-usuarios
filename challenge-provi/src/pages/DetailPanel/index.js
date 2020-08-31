import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import Installments from "../../components/Graphics/Installments";
import TotalPaid from "../../components/Graphics/TotalPaid";

import { Typography } from "@material-ui/core";
import {
  BackgroundStyle,
  ContentWrapper,
  GraphicWrapper,
  AsideWrapper,
} from "./styles";


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
              {total?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
            <hr />
            <Typography variant="overline">Valor Juros Total</Typography>
            <Typography variant="h6" color="secondary">
              {data?.totalAmountInTaxes?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
            <hr />
            <Typography variant="overline">Taxa de juros mensal</Typography>
            <Typography variant="h6" color="secondary">
              {data?.monthlyInterest}%
            </Typography>
            <hr />
            <Typography variant="overline">Valor total pago</Typography>
            <Typography variant="h6" color="secondary">
              {data?.amountPayd?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
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
