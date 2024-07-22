import styled from "styled-components";

export const MainComponentContainer = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/team-champs.png");
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  height: 100%;
  margin: 50px auto;
  width: 80%;
  background-color: rgba(54, 54, 54, 0.6);
  padding: 20px;

  h3 {
    color: white;
  }

  h1 {
    color: white;
  }
`;

export const MainContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TableRowHeader = styled.tr`
  background-color: black;
  color: white;
`;

export const TeamTable = styled.table`
  margin: 10px auto 0 auto;
  background-color: white;

  tr {
    * {
      padding: 8px 100px;
      text-align: center;
    }
  }
`;

export const TableContainer = styled.div`
  max-height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
`;
