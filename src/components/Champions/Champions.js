import {
  MainPageContainerChampions,
  ContentContainer,
  NameContainer,
  MainContentContainer,
  PictureContainer,
  ScoreContainer,
  OverallRankingContainer,
  MetricScores,
  ImageContainer,
  FirstTableRow,
} from "./ChampionsStyles";
import { links } from "./ChampionsList";

const Champions = () => {
  return (
    <>
      <MainPageContainerChampions>
        <ContentContainer>
          <NameContainer>
            <h2>ROHIT SHARMA</h2>
            <h2>June 2024</h2>
          </NameContainer>
          <MainContentContainer>
            <PictureContainer>
              <ImageContainer src="" alt="" />
              <ScoreContainer>
                <h3>Overall Score</h3>
                <p>100%</p>
              </ScoreContainer>
            </PictureContainer>
            <OverallRankingContainer>
              <table>
                <FirstTableRow>
                  <th>Rank</th>
                  <th>Driver</th>
                  <th>Score</th>
                </FirstTableRow>
                {links.map((link, index) => (
                  <tr>
                    <td>{link.rank}</td>
                    <td>{link.employee}</td>
                    <td>{link.score}</td>
                  </tr>
                ))}
              </table>
            </OverallRankingContainer>
            <MetricScores>
              <h1>Metric Scores</h1>
              <div>
                <h3>AHT</h3>
                <p>300s</p>
              </div>
              <div>
                <h3>ATR</h3>
                <p>5%</p>
              </div>
              <div>
                <h3>CSAT</h3>
                <p>100%</p>
              </div>
              <div>
                <h3>IR</h3>
                <p>NA</p>
              </div>
            </MetricScores>
          </MainContentContainer>
        </ContentContainer>
      </MainPageContainerChampions>
    </>
  );
};

export default Champions;
