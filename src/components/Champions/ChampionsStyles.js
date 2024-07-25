import styled from "styled-components";

export const MainPageContainerChampions = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: white;
`;

export const ContentContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const OverallContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
  }
  img {
    background-color: #283238ca;
    height: 330px;
    border-top: 2px solid white;
    margin: 4px;
    padding: 8px;
  }
`;

export const MetricScores = styled.div`
  color: white;
  display: flex;
  margin: 2px;
`;

export const Scores = styled.div`
  padding: 5px 0;
  width: 60px;
  margin: 2px;
  text-align: center;
  background-color: #283238ca;
  border-top: 2px solid white;
`;

export const OverallRankingContainer = styled.div`
  h3 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TableContainer = styled.div`
  max-height: 450px;
  overflow: auto;

  table {
    border-top: 2px solid white;
    background-color: #283238ca;
  }

  tr {
    * {
      padding: 10px 50px;
      text-align: center;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }
`;

export const FirstTableRow = styled.tr`
  background-color: black;
  color: white;
`;

export const OverallScore = styled.div`
  border-top: 2px solid white;
  color: white;
  text-align: center;
  background-color: #283238ca;
  padding: 5px;
  margin: 4px;
`;
