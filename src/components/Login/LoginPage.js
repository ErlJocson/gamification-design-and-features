import { styled } from "styled-components";

const LoginPage = () => {
  return (
    <>
      <MainComponent>
        <LoginForm>
          <img src="/logo/hgs.svg" alt="" width="300" />
          <InputContainer>
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="submit" value="LOGIN" />
            </div>
          </InputContainer>
        </LoginForm>
      </MainComponent>
    </>
  );
};

export default LoginPage;

const MainComponent = styled.div`
  background-image: url("/background-images/login.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const LoginForm = styled.form`
  height: 140px;
  color: white;
  background-color: rgba(54, 54, 54, 0.94);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const InputContainer = styled.div`
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
      border-radius: 25px;
      padding: 5px 20px;
    }

    input[type="text"],
    input[type="password"] {
      width: 300px;
    }

    input[type="submit"] {
      background-color: #0c84af;
      color: white;
      cursor: pointer;
      transition: all 500ms;
    }

    input[type="submit"]:hover {
      background-color: #00b0f0;
    }
  }
`;
