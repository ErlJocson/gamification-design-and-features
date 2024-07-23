import styled from "styled-components";

export const MainComponent = styled.div`
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
`;

export const LoginForm = styled.form`
  margin-right: 50px;
  margin-top: 280px;
  border-top: 2px solid white;
  color: white;
  width: 500px;
  background-color: #283238;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  p {
    margin: 12px 0;
  }
`;

export const InputContainer = styled.div`
  div {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      font-size: 15px;
      line-height: 1.5;
      color: #666;
      display: block;
      background-color: #e6e6e6;
      border: none;
      padding: 3px 16px;
      font-family: "Exo 2", sans-serif;
    }

    input[type="text"],
    input[type="password"] {
      width: 300px;
    }

    input[type="submit"] {
      background-color: #42545e;

      color: white;
      cursor: pointer;
      transition: all 500ms;
      margin: 0 2px;
    }

    input[type="submit"]:hover {
      background-color: #00b0f0;
    }
  }
`;
