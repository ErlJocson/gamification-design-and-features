import styled from "styled-components";

export const MainContentContainerShop = styled.div`
  height: calc(100vh - 80px);
`;

export const MainContents = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DriverName = styled.h1`
  color: white;
`;

export const DriverEarnings = styled.h1`
  color: white;
`;

export const NavigationButtons = styled.div`
  button {
    padding: 5px 25px;
    margin: 0 10px;
    border: none;
    cursor: pointer;
    border-radius: 25px;
  }
`;

export const Carousel = styled.div`
  img {
    border-radius: 25px;
    margin: 10px;
  }
`;

export const ContentContainers = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
