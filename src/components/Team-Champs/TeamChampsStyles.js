import styled from "styled-components";

export const MainComponentContainer = styled.div`
  height: calc(100vh - 80px);
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  height: 80%;
  margin: 50px auto;
  width: 80%;
  padding: 20px;
  h3,
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
  width: 100%;
  background-color: #ffffff6e;

  tr {
    * {
      padding: 8px 100px;
      text-align: center;
    }
  }

  div {
    overflow: auto;
  }
`;

export const TableContainer = styled.div`
  height: 60vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
`;

export const NameContainer = styled.div`
  margin-top: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
