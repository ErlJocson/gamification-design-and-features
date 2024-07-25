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
import { links } from "./ChampList";
import { useEffect } from "react";
import { imageLinks } from "../background-images-links/Links";

const TeamChamps = () => {
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
              <a>Daily</a>
              <a>Weekly</a>
              <a>Monthly</a>
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
              {links.map((link, index) => (
                <tr key={index}>
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
