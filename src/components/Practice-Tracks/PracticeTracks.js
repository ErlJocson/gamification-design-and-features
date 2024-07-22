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
          <h1>Rohit Sharma</h1>
          <ContentContainer>
            <h2>Practice Tracks</h2>
            <Contents>
              <Tracks>
                <p>NEW TRACKS</p>
                <h2>5</h2>
              </Tracks>
              <TrackTypes>
                <p>Track - New Delta Geatures</p>
                <p>Track - Fees & Commission</p>
                <p>Track 3</p>
                <p>Track 4</p>
                <p>Track 5</p>
              </TrackTypes>
            </Contents>
          </ContentContainer>
        </MainContent>
      </MainComponentContainer>
    </>
  );
};

export default PracticeTracks;
