import { MainContentContainer, TopItems } from "./ChallengesStyles";
import { useEffect } from "react";

const Challenges = () => {
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
      <MainContentContainer>
        <TopItems>
          <h2>Reward to Race</h2>
          <input type="number" />
        </TopItems>
      </MainContentContainer>
    </>
  );
};

export default Challenges;
