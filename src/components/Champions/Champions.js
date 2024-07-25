import {
  MainPageContainerChampions,
  OverallRankingContainer,
  FirstTableRow,
  OverallScore,
  MetricScores,
  ContentContainer,
  OverallContainer,
  Scores,
  LeftContent,
  TableContainer,
  TableTitleContainer,
  ButtonContainer,
} from "./ChampionsStyles";
import { links, links2, links3 } from "./ChampionsList";
import { useEffect, useState } from "react";
import { imageLinks } from "../background-images-links/Links";

const Champions = () => {
  const [granularity, setGranularity] = useState("Monthly");
  const [datasetToUse, setDataSetToUse] = useState(links3);

  useEffect(() => {
    const numbers = Math.floor(Math.random() * imageLinks.length);

    document.body.style.backgroundImage = `url(${imageLinks[numbers]})`;
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
          <LeftContent>
            <OverallContainer>
              <h3>Rohit Sharma</h3>
              <img
                src="/gamification-design-and-features/avatar/avatar.png"
                alt=""
              />
              <OverallScore>
                <p>Overall Score</p>
                <h3>95.0%</h3>
              </OverallScore>
            </OverallContainer>
            <MetricScores>
              <Scores>
                <p>AHT</p>
                <h4>200</h4>
              </Scores>
              <Scores>
                <p>ATR</p>
                <h4>10%</h4>
              </Scores>
              <Scores>
                <p>CSAT</p>
                <h4>75%</h4>
              </Scores>
              <Scores>
                <p>IR</p>
                <h4>5%</h4>
              </Scores>
            </MetricScores>
          </LeftContent>

          <OverallRankingContainer>
            <TableTitleContainer>
              <ButtonContainer>
                <a
                  style={{
                    backgroundColor: granularity === "Daily" ? "black" : "",
                    color: granularity === "Daily" ? "white" : "",
                  }}
                  onClick={() => {
                    setGranularity("Daily");
                    setDataSetToUse(links);
                  }}
                >
                  Daily
                </a>
                <a
                  style={{
                    backgroundColor: granularity === "Weekly" ? "black" : "",
                    color: granularity === "Weekly" ? "white" : "",
                  }}
                  onClick={() => {
                    setGranularity("Weekly");
                    setDataSetToUse(links2);
                  }}
                >
                  Weekly
                </a>
                <a
                  style={{
                    backgroundColor: granularity === "Monthly" ? "black" : "",
                    color: granularity === "Monthly" ? "white" : "",
                  }}
                  onClick={() => {
                    setGranularity("Monthly");
                    setDataSetToUse(links3);
                  }}
                >
                  Monthly
                </a>
              </ButtonContainer>
              <h3>June 2024</h3>
            </TableTitleContainer>
            <TableContainer>
              <table>
                <FirstTableRow>
                  <th>Rank</th>
                  <th>Driver</th>
                  <th>Score</th>
                </FirstTableRow>
                {datasetToUse.map((link, index) => (
                  <tr
                    key={index}
                    style={{
                      color: link.employee === "Rohit Sharma" ? "red" : "white",
                    }}
                  >
                    <td>{link.rank}</td>
                    <td>{link.employee}</td>
                    <td>{link.score}</td>
                  </tr>
                ))}
              </table>
            </TableContainer>
          </OverallRankingContainer>
        </ContentContainer>
      </MainPageContainerChampions>
    </>
  );
};

export default Champions;
