import styled from "styled-components";

export const MainContentContainerShop = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/garage.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContents = styled.div`
  width: 80%;
  margin: auto;
  background-color: #cec8b88a;
  padding: 30px 0;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DriverName = styled.h1`
  margin-left: 20px;
`;

export const DriverEarnings = styled.h1`
  margin-right: 20px;
`;

export const CarouselContainer = styled.div``;

export const NavigationButtons = styled.div`
  button {
    padding: 5px 10px;
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
  height: 80%;

  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
