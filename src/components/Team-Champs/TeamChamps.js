import {
  MainComponentContainer,
  TeamTable,
  TableRowHeader,
  LeftContainer,
  TableContainer,
  TableContents,
  ButtonContainer,
  MainTableContainer,
} from "./TeamChampsStyles";
import { links, links2, links3 } from "./ChampList";
import { useEffect, useState } from "react";
import { imageLinks } from "../background-images-links/Links";

const TeamChamps = () => {
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
      <MainComponentContainer>
        <LeftContainer>
          <img
            src="/gamification-design-and-features/logo/bose.svg"
            alt=""
            className="bose-logo"
          />
          <h3>Rohit Sharma</h3>
          <h4>72.3%</h4>
          <img
            className="avatar"
            src="/gamification-design-and-features/avatar/avatar.png"
            alt=""
          />
        </LeftContainer>
        <TableContainer>
          <TableContents>
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
          </TableContents>
          <MainTableContainer>
            <TeamTable>
              <TableRowHeader>
                <th>Rank</th>
                <th>Driver</th>
                <th>Lead</th>
                <th>Score</th>
              </TableRowHeader>
              {datasetToUse.map((link, index) => (
                <tr
                  key={index}
                  style={{
                    color: link.employee === "Rohit Sharma" ? "red" : "white",
                  }}
                >
                  <td>{link.rank}</td>
                  <td>{link.employee}</td>
                  <td>{link.metric}</td>
                  <td>{link.score}</td>
                </tr>
              ))}
            </TeamTable>
          </MainTableContainer>
        </TableContainer>
      </MainComponentContainer>
    </>
  );
};

export default TeamChamps;
