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
import { useEffect } from "react";

const Champions = () => {
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
      <MainPageContainerChampions>
        <ContentContainer>
          <NameContainer>
            <h2>ROHIT SHARMA</h2>
            <h2>June 2024</h2>
          </NameContainer>
          <MainContentContainer>
            <PictureContainer>
              <ImageContainer
                src={process.env.PUBLIC_URL + "/background-images/avatar.png"}
                alt=""
              />
              <ScoreContainer>
                <h3>Overall Score</h3>
                <p className="text-gradient">100%</p>
              </ScoreContainer>
            </PictureContainer>

            <MetricScores>
              <h1>Metric Scores</h1>
              <div>
                <h3>AHT</h3>
                <p className="text-gradient">300s</p>
              </div>
              <div>
                <h3>ATR</h3>
                <p className="text-gradient">5%</p>
              </div>
              <div>
                <h3>CSAT</h3>
                <p className="text-gradient">100%</p>
              </div>
              <div>
                <h3>IR</h3>
                <p className="text-gradient">NA</p>
              </div>
            </MetricScores>
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
          </MainContentContainer>
        </ContentContainer>
      </MainPageContainerChampions>
    </>
  );
};

export default Champions;
