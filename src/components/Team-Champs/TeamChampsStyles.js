import styled from "styled-components";

export const MainComponentContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableRowHeader = styled.tr`
  background-color: black;
  color: white;
`;

export const TeamTable = styled.table`
  background-color: #283238ca;
  border-top: 2px solid white;
  color: white;

  tr {
    * {
      padding: 8px 30px;
      text-align: center;
    }
  }
`;

export const TableContainer = styled.div`
  max-height: 450px;
  margin: 0 10px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #283238ca;
  padding: 20px;
  border-top: 2px solid white;
  color: white;
  margin: 0 10px;
  margin-top: 45px;
  .avatar {
    height: 300px;
  }

  .bose-logo {
    margin-bottom: 18px;
  }
`;

export const TableContents = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  a {
    text-decoration: none;
    margin: 0 10px;
    padding: 0 10px;
    transition: all 500ms;
    border: none;
    cursor: pointer;
    background-color: white;
    color: black;
  }

  a:hover {
    color: white;
    background-color: black;
  }
`;

export const MainTableContainer = styled.div`
  max-height: 450px;
  overflow: auto;
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
