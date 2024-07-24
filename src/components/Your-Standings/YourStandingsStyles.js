import styled from "styled-components";

export const MainPageContainerYourStanding = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentCotainer = styled.div`
  height: calc(100vh - 80px);
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RankContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0;
  font-size: 25px;
  font-weight: bold;
  * {
    margin: 0 2px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
`;

export const PictureContainer = styled.div`
  background-color: #283238ca;
  padding: 10px;
  border-top: 2px solid white;

  img {
    width: 100%;
    height: 350px;
  }
`;

export const NameContainer = styled.h1``;

export const MetricContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    div {
      background-color: #283238ca;
      margin: 6px;
      padding: 5px;
      border-top: 2px solid white;
      min-width: 200px;
      height: 200px;
      p {
        width: 100%;
        font-size: 50px;
        height: calc(100% - 26px);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .all-badges {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    img {
      height: 60px;
      width: 60px;
      margin: 2px;
      padding: 8px;
    }
  }
`;

export const MetricTitle = styled.h4`
  font-size: 15px;
  display: flex;
  align-items: center;
`;
