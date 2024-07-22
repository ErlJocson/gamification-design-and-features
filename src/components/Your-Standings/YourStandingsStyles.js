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
  margin: 0 auto;

  width: 80%;
  height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  h2 {
    margin: 0 20px;
    margin-top: 10px;
  }
`;

export const StandingContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageAndRankContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  align-items: center;
  @media screen and (max-width: 1000px) {
    img,
    div {
      width: 100px;
      height: 150px;
      h3 {
        font-size: 80px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    img,
    div {
      width: 900px;
      height: 140px;
      h3 {
        font-size: 50px;
      }
    }
  }
`;

export const ImageContainer = styled.img`
  width: 150px;
  height: 200px;
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 200px;

  background-color: rgb(255, 255, 255);

  h3 {
    font-size: 80px;
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
  padding: 10px;

  h3 {
    font-size: 15px;
    color: white;
  }

  p {
    font-size: 45px;
    font-weight: bold;
  }

  @media screen and (max-width: 1100px) {
    h3 {
      font-size: 10px;
    }

    p {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 1000px) {
    h3 {
      font-size: 8px;
    }

    p {
      font-size: 38px;
    }
  }
`;
