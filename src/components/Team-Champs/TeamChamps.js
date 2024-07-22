import {
  MainComponentContainer,
  ContentContainer,
  TeamTable,
  TableRowHeader,
  MainContentContainer,
  TableContainer,
} from "./TeamChampsStyles";
import { links } from "./ChampList";

const TeamChamps = () => {
  return (
    <>
      <MainComponentContainer>
        <MainContentContainer>
          <ContentContainer>
            <h3>Bose</h3>
            <h1>Rohit Sharma</h1>
            <h1>1st Rank</h1>
            <TableContainer>
              <TeamTable>
                <TableRowHeader>
                  <th>Rank</th>
                  <th>Driver</th>
                  <th>Metric</th>
                  <th>Score</th>
                </TableRowHeader>
                {links.map((link, index) => (
                  <tr>
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
