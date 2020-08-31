import styled from "styled-components";


const Button = styled.button`
  color: white;
  border: 1px solid #5766ae;
  background: #323B69;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  margin: 0 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 30px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .4;
  }
`;

export default Button