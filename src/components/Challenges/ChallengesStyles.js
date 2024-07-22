import styled from "styled-components";

export const MainContentContainer = styled.div``;

export const TopItems = styled.div`
  margin-top: 20px;
  text-align: center;
  h2 {
    color: white;
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    text-align: center;
    color: white;
    font-size: 30px;
    width: 50px;
    text-align: center;
  }

  input[type="number"]:active,
  input[type="number"]:focus {
    all: unset;
    width: 50px;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    text-align: center;
    color: white;
    font-size: 30px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
