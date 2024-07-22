import React from "react";
import styled from "styled-components";

export default function MainPage() {
  return (
    <>
      <MainPageContainer>
        <ContentContainer>
          <h3>Rohit Sharma</h3>
          <p>Performance of the month of June</p>
          <div></div>
        </ContentContainer>
      </MainPageContainer>
    </>
  );
}

const MainPageContainer = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/your-standing.png");
  background-position: center;
  background-size: cover;
`;

const ContentContainer = styled.div`
  height: calc(100vh - 80px);
  margin-top: 100px;
  width: 80%;
  margin: 0 auto;
`;
