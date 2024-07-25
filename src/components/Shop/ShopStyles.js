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

export const DriverEarnings = styled.h3`
  color: white;
  border-top: 2px solid white;
  background-color: #283238ca;
  padding: 10px;
`;

export const NavigationButtons = styled.div`
  button {
    padding: 5px 25px;
    margin: 0 10px;
    border: none;
    cursor: pointer;
    transition: all 500ms;
    border: 1px solid black;
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
    color: #ff914d;
    font-size: 15px;
    width: 100px;
    padding: 5px 10px;
  }

  h4 {
    color: white;
  }
`;

export const CarouselItem = styled.div`
  border-top: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #283238ca;
  padding: 8px;
  margin: 5px;
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
