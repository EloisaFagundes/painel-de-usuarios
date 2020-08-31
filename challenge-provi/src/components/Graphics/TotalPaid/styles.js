import { Chart } from "react-google-charts";
import styled from "styled-components";

export const ChartStyled = styled(Chart)`
  width: 25vw;
  height: 60vh;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;