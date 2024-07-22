import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  color: white;
  background-color: rgba(54, 54, 54, 0.94);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftItems = styled.div`
  display: flex;
  margin-left: 100px;
  p {
    display: flex;
    align-items: center;

    margin: 0 10px;
    strong {
      margin-left: 6px;
    }
  }
`;

export const RightItems = styled.div`
  margin-right: 100px;
  p {
    display: flex;
    align-items: center;
  }
`;

export const MyLink = styled(Link)`
  margin-left: 6px;
  color: white;
  text-decoration: none;
  transition: all 500ms;

  &:hover {
    color: rgba(183, 183, 183, 0.94);
    transform: translateY(-6px);
  }
`;
