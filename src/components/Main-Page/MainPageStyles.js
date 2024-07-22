import styled from "styled-components";

export const MainPageContainer = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/Picture1.png");
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`;

export const MetricContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 10px;
  }
`;

export const MetricTable = styled.div`
  display: flex;
  div {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 6px;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      strong {
        margin-left: 8px;
        color: white;
      }
    }
    h3 {
      font-size: 40px;
    }
  }
`;

export const TextContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  color: white;
`;
