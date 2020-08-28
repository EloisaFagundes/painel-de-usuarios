import React from "react";
import {Button} from '@material-ui/core'
import Appbar from '../../components/Appbar';


import styled from 'styled-components'


const ImageCircle = styled.img`
    background-color: red;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: relative;
  
  /* .circle img {
    position: absolute;
    bottom: 0;
    width: 100%;
  } */
`

function Panel() {
  return (
    <>
    <Appbar />
    <ImageCircle></ImageCircle>
      <p>Nome</p>
      <p>Valor total do empréstimo</p>
      <Button variant='contained' color='primary'>Detalhes</Button>
    </>
  );
}

export default Panel;
