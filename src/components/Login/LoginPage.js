import { MainComponent, LoginForm, InputContainer } from "./LoginPageStyle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    const newElement = document.createElement("video");

    newElement.autoplay = true;
    newElement.loop = true;

    const newElement2 = document.createElement("source");

    newElement2.setAttribute(
      "src",
      "/gamification-design-and-features/background-images/Media1.mp4"
    );
    newElement2.setAttribute("type", "video/mp4");

    newElement.appendChild(newElement2);
    document.body.appendChild(newElement);

    return () => {
      document.body.removeChild(newElement);
    };
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <MainComponent>
        <LoginForm>
          <img
            src="/gamification-design-and-features/logo/Picture1.png"
            alt=""
            width="200"
          />

          <InputContainer>
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="submit" value="LOGIN" onClick={handleClick} />
              <input type="submit" value="FORGOT PASSWORD" />
            </div>
          </InputContainer>
        </LoginForm>
      </MainComponent>
    </>
  );
};

export default LoginPage;
