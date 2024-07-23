import styled from "styled-components";

export const MainPageContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MetricContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #283238ca;
  border-top: 2px solid white;

  margin: 20px 0;

  h3 {
    margin-bottom: 10px;
  }
`;

export const MetricTable = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  .h3-title {
    color: white;
  }
`;

export const MetricType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 6px;

  p {
    color: white;
    span {
      font-size: 12px;
    }
  }
`;

export const TextContainer = styled.div`
  margin-top: 10px;
  color: white;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin-left: 20px;
    h3,
    h4 {
      font-weight: normal;
    }
  }

  p {
    margin-right: 20px;
    display: flex;
    align-items: center;
    * {
      margin: 0 10px;
    }
  }
`;

export const Gauge = styled.div`
  display: flex;
  justify-content: space-between;
  .progress {
    display: flex;
    align-items: center;
    .progress-bar {
      background-color: white;
      height: 10px;
    }

    .progress-bar-unfilled {
      background-color: black;
      height: 10px;
    }

    .bar {
      margin: 0 10px;
      height: 20px;
      width: 15px;
      background-color: white;
    }

    .bar-black {
      margin: 0 10px;
      height: 20px;
      width: 15px;
      background-color: #4c4c4c;
    }
  }

  h3 {
    font-size: 16px;
    background-color: #ffffff8f;
    color: white;
    padding: 0 6px;
    letter-spacing: 2px;
    font-weight: normal;
    font-style: italic;
  }
`;
