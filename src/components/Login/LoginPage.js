import { styled } from "styled-components";

const LoginPage = () => {
  return (
    <>
      <MainComponent></MainComponent>
    </>
  );
};

export default LoginPage;

const MainComponent = styled.div`
  background-image: url("../public/background-images/login.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;
