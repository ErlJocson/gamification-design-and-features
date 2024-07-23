import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftItems = styled.div`
  display: flex;
`;

export const MyLink = styled(NavLink)`
  border: 1px solid white;
  margin: 0 4px;
  color: black;
  text-decoration: none;
  transition: all 500ms;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  * {
    margin: 0 2px;
  }

  &:hover {
    color: white;
    background-color: black;
  }

  &:active {
    color: white;
    background-color: black;
  }

  &.active {
    color: white;
    background-color: black;
  }
`;
