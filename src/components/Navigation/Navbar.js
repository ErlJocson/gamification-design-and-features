import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LeftItems>
          <p>YOUR STANDINGS</p>
          <p>CHAMPIONS</p>
          <p>TEAM CHAMPS</p>
          <p>SHOP</p>
          <p>PRACTICE TRACKS</p>
        </LeftItems>

        <RightItems>
          <p>CHALLENGES</p>
        </RightItems>
      </NavbarContainer>
    </>
  );
}

const NavbarContainer = styled.div`
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

const LeftItems = styled.div`
  display: flex;
  margin-left: 100px;
  p {
    margin: 0 10px;
  }
`;

const RightItems = styled.div`
  margin-right: 100px;
`;
