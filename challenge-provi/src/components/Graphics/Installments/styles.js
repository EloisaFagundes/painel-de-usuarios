import styled from "styled-components";
import { Chart } from "react-google-charts";

export const ChartStyled = styled(Chart)`
  width: 50vw;
  height: 60vh;
  @media (max-width: 1200px) {
    width: 105vw;
    padding: 3vw;
  }
`;
