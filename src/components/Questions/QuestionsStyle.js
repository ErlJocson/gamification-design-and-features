import styled from "styled-components";

export const MainComponentContainer = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/yey.avif");
  background-position: center;
  background-size: cover;
  display: flex;
`;

export const MainContent = styled.div`
  width: 80%;
  margin: auto;
`;

export const Tracks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 40px;
  }

  h2 {
    font-size: 50px;
  }
`;

export const TrackTypes = styled.div`
  p {
    transition: all 500ms;
    padding: 10px;
    cursor: pointer;
    border: 1px solid white;
    margin: 4px 0;
    width: 500px;
    background-color: #cec8b88a;
  }

  p:hover {
    background-color: black;
    color: white;
  }
`;

export const ContentContainer = styled.div`
  background-color: #cec8b88a;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
