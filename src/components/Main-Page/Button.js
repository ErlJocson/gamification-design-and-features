import styled from "styled-components";
import { FaCar } from "react-icons/fa";
import { useState } from "react";

const Button = (props) => {
  const [showBGColor, setShowBGColor] = useState(false);

  const handleClick = () => {
    setShowBGColor(!showBGColor);
  };

  return (
    <>
      <ToggleButton
        style={{
          backgroundColor: !showBGColor ? "#0000002d" : "#ffffff9c",
          color: !showBGColor ? "white" : "black",
          border: !showBGColor ? "2px solid white" : "",
        }}
        onClick={() => {
          props.onClick();
          handleClick();
        }}
      >
        <FaCar
          style={{
            fontSize: "50px",
          }}
        />
      </ToggleButton>
    </>
  );
};

export default Button;

const ToggleButton = styled.button`
  position: absolute;
  padding: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  right: 90px;
  margin-top: 150px;
`;
