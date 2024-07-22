import styled from "styled-components";

export const MainPageContainerYourStanding = styled.div`
  height: calc(100vh - 80px);
  background-image: url("/background-images/your-standing 1.png");
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  margin: 50px auto;
  background-color: rgba(54, 54, 54, 0.6);

  width: 80%;
  height: calc(100vh - 200px);
`;

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0 20px;
    margin-top: 10px;
    color: white;
  }
`;

export const StandingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ImageAndRankContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 250px;
  background-image: url("/background-images/avatar.png");
  background-position: center;
  background-size: cover;
  margin-left: 200px;
  border-radius: 25px;
`;

export const RankContainer = styled.div`
  margin-right: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 250px;
  border-radius: 25px;
  background-color: rgb(255, 255, 255);

  h3 {
    font-size: 100px;
  }
`;

export const ScoreContainer = styled.div``;

export const ScoreCardsContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScoreCards = styled.div`
  text-align: center;
  margin: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 10px;

  h3 {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }
`;
