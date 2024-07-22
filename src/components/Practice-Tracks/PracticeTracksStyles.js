import styled from "styled-components";

export const MainComponentContainer = styled.div`
  height: calc(100vh - 80px);
`;

export const MainContent = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Tracks = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  color: white;
  p {
    font-size: 40px;
  }

  h2 {
    font-size: 50px;
  }
`;

export const TrackTypes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 600px;
  p {
    transition: all 500ms;
    text-align: center;

    padding: 10px;
    cursor: pointer;
    margin: 4px;
    width: 500px;
    background-color: #cec8b88a;
  }

  p:hover {
    background-color: black;
    color: white;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  h1 {
    color: white;
  }
`;
