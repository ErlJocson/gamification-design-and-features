import {
  MainComponentContainer,
  MainContent,
  Tracks,
  TrackTypes,
  ContentContainer,
  Contents,
} from "./PracticeTracksStyles";

const PracticeTracks = () => {
  return (
    <>
      <MainComponentContainer>
        <MainContent>
          <Tracks>
            <p>NEW PRACTICE TRACKS</p>
            <h2>5</h2>
          </Tracks>
          <Contents>
            <h1>TRACKS</h1>
            <TrackTypes>
              <p>Track - New Delta Geatures</p>
              <p>Track - Fees & Commission</p>
              <p>Track 3</p>
              <p>Track 4</p>
              <p>Track 5</p>
            </TrackTypes>
          </Contents>
        </MainContent>
      </MainComponentContainer>
    </>
  );
};

export default PracticeTracks;
