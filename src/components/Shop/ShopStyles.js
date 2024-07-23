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
    transition: all 500ms;
  }

  button:hover {
    background-color: #878787b6;
    color: white;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: end;
  img {
    margin: 10px;
  }

  p {
    text-align: center;
    color: black;

    font-size: 15px;
    background-color: rgba(243, 243, 243, 0.597);
    width: 100px;
    padding: 5px 10px;
  }
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
