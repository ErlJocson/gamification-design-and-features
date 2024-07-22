import styled from "styled-components";

export const MainPageContainerChampions = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/your-standing 1.png");
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  margin: 50px auto;
  background-color: #cec8b88a;

  width: 80%;
  height: calc(100vh - 200px);
`;

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0 20px;
    margin-top: 10px;
  }
`;

export const MainContentContainer = styled.div`
  height: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreContainer = styled.div`
  justify-content: space-evenly;
  color: black;
  text-align: center;
  p {
    font-size: 50px;
    font-weight: bold;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 250px;
  background-image: url("/background-images/avatar.png");
  background-position: center;
  background-size: cover;
  border-radius: 25px;
`;

export const OverallRankingContainer = styled.div`
  max-height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  table {
    background-color: white;
  }
  tr {
    * {
      padding: 10px 50px;
      text-align: center;
    }
  }
`;

export const FirstTableRow = styled.tr`
  background-color: black;
  color: white;
`;

export const MetricScores = styled.div`
  max-height: 500px;
  overflow: auto;

  h1 {
    text-align: center;
  }

  div {
    text-align: center;
    background-color: white;
    margin: 10px;
    padding: 5px 0;
    min-width: 200px;
    background-color: rgba(255, 255, 255, 0.6);

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 40px;
      font-weight: bold;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
`;
