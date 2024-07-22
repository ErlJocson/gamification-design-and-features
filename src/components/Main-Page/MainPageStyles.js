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

export const SomeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const MetricContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cec8b88a;
  align-items: center;
  justify-content: center;
  padding: 20px;

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
    background-color: #e0e0e0;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      strong {
        margin-left: 8px;
      }
    }
    h3 {
      font-size: 40px;
    }
  }
`;
