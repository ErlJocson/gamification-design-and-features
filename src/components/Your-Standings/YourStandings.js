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

const YourStandings = () => {
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
              <ImageContainer src="" />
              <RankContainer>
                <h1>RANK</h1>
                <h3>02</h3>
              </RankContainer>
            </ImageAndRankContainer>
            <ScoreContainer>
              <ScoreCardsContainer>
                <ScoreCards>
                  <h3>EARNINGS</h3>
                  <p>100</p>
                </ScoreCards>
                <ScoreCards>
                  <h3>BADGES</h3>
                  <p>100</p>
                </ScoreCards>
                <ScoreCards>
                  <h3>RACE WON</h3>
                  <p>100</p>
                </ScoreCards>
                <ScoreCards>
                  <h3>ASSESSMENT</h3>
                  <p>100 | 50</p>
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
