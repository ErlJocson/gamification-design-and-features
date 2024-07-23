import React from "react";
import { useEffect } from "react";

const Pitstop = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url("/gamification-design-and-features/background-images/Parts/Home.png")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);
  return <></>;
};

export default Pitstop;
