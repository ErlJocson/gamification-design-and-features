import {
  MainPageContainerYourStanding,
  NameContainer,
  StandingContainer,
  ImageAndRankContainer,
  ContentContainer,
  RankContainer,
  ScoreContainer,
  ScoreCards,
  ImageContainer,
  ScoreCardsContainer,
} from "./YourStandingsStyles";
import { useEffect } from "react";

const YourStandings = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url("/gamification-design-and-features/background-images/Parts/Home.png")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <MainPageContainerYourStanding>
        <ContentContainer>
          <NameContainer>
            <h2>ROHIT SHARMA</h2>
            <h2>June 2024</h2>
          </NameContainer>
          <StandingContainer>
            <ImageAndRankContainer>
              <ImageContainer
                src={process.env.PUBLIC_URL + "/background-images/avatar.png"}
              />
              <RankContainer>
                <h1>RANK</h1>
                <h3>02</h3>
              </RankContainer>
            </ImageAndRankContainer>
            <ScoreContainer>
              <ScoreCardsContainer>
                <ScoreCards>
                  <h3>EARNINGS</h3>
                  <p className="text-gradient">100</p>
                </ScoreCards>
                <ScoreCards>
                  <h3>BADGES</h3>
                  <p className="text-gradient">100</p>
                </ScoreCards>
                <ScoreCards>
                  <h3>RACE WON</h3>
                  <p className="text-gradient">100</p>
                </ScoreCards>
                <ScoreCards>
                  <h3>ASSESSMENT</h3>
                  <p className="text-gradient">4 | 10</p>
                </ScoreCards>
              </ScoreCardsContainer>
            </ScoreContainer>
          </StandingContainer>
        </ContentContainer>
      </MainPageContainerYourStanding>
    </>
  );
};

export default YourStandings;
