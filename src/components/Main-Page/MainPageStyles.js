import styled from "styled-components";

export const MainPageContainer = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/your-standing.png");
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
  background-color: rgba(54, 54, 54, 0.6);
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const MetricTable = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 6px;
    background-color: rgb(255, 255, 255, 0.5);
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      strong {
        margin-left: 8px;
      }
    }
  }
`;
