import {
  MainComponentContainer,
  MainContent,
  Tracks,
  TrackTypes,
  Contents,
} from "./PracticeTracksStyles";
import { useEffect } from "react";

const PracticeTracks = () => {
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
