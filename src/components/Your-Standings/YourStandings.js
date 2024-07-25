import {
  MainPageContainerYourStanding,
  ContentCotainer,
  RankContainer,
  DetailsContainer,
  PictureContainer,
  MetricContainer,
  NameContainer,
  MetricTitle,
} from "./YourStandingsStyles";
import { useEffect } from "react";
import { FaMedal } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { imageLinks } from "../background-images-links/Links";

const YourStandings = () => {
  useEffect(() => {
    const numbers = Math.floor(Math.random() * imageLinks.length);

    document.body.style.backgroundImage = `url(${imageLinks[numbers]})`;
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <MainPageContainerYourStanding>
        <ContentCotainer>
          <RankContainer>
            <FaMedal />
            Rank 6
          </RankContainer>
          <DetailsContainer>
            <PictureContainer>
              <NameContainer>Rohit Sharma</NameContainer>
              <img
                src="/gamification-design-and-features/avatar/avatar.png"
                alt=""
              />
            </PictureContainer>
            <MetricContainer>
              <div>
                <div>
                  <MetricTitle>Earnings</MetricTitle>
                  <p>1000</p>
                </div>
                <div>
                  <MetricTitle>
                    Badges
                    <IoIosAddCircleOutline
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </MetricTitle>
                  <p className="all-badges">
                    <img
                      src="/gamification-design-and-features/badges/Picture1.png"
                      alt=""
                    />
                    <img
                      src="/gamification-design-and-features/badges/Picture2.png"
                      alt=""
                    />
                    <img
                      src="/gamification-design-and-features/badges/Picture3.png"
                      alt=""
                    />
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <MetricTitle>Race Won</MetricTitle>
                  <p>100</p>
                </div>
                <div>
                  <MetricTitle>Assessment</MetricTitle>
                  <p>5 | 7</p>
                </div>
              </div>
            </MetricContainer>
          </DetailsContainer>
        </ContentCotainer>
      </MainPageContainerYourStanding>
    </>
  );
};

export default YourStandings;
