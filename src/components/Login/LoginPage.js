import { styled } from "styled-components";

const LoginPage = () => {
  return (
    <>
      <MainComponent>
        <LoginFormContainer>
          <LoginForm>
            <img src="/logo/hgs.svg" alt="" width="300" />
            <h3>Member Login</h3>
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="submit" value="LOGIN" />
            </div>
          </LoginForm>
        </LoginFormContainer>
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
  display: flex;
  flex-direction: row-reverse;
`;

const LoginForm = styled.form`
  color: white;
  background-color: rgba(29, 26, 27, 0.94);
  width: 300px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  img {
    margin: 16px 0;
  }

  div {
    margin: 10px 0;
    display: flex;
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
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 200px;
`;
