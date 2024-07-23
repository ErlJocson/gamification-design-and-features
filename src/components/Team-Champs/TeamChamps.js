import {
  MainComponentContainer,
  ContentContainer,
  TeamTable,
  TableRowHeader,
  MainContentContainer,
  TableContainer,
  NameContainer,
} from "./TeamChampsStyles";
import { links } from "./ChampList";
import { useEffect } from "react";

const TeamChamps = () => {
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
      <MainComponentContainer>
        <MainContentContainer>
          <NameContainer>
            <h1>Rohit Sharma</h1>
            <h1>2nd Rank</h1>
            <h3>Bose</h3>
          </NameContainer>

          <ContentContainer>
            <TableContainer>
              <TeamTable>
                <TableRowHeader>
                  <th>Rank</th>
                  <th>Driver</th>
                  <th>Team Lead</th>
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
            </TableContainer>
          </ContentContainer>
        </MainContentContainer>
      </MainComponentContainer>
    </>
  );
};

export default TeamChamps;