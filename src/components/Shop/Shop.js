import {
  MainContentContainerShop,
  NavigationButtons,
  CarouselContainer,
  Top,
  Carousel,
  DriverName,
  DriverEarnings,
  ContentContainers,
  MainContents,
} from "./ShopStyles";
import { useState } from "react";

export default function Shop() {
  const [index, setIndex] = useState(0);

  const pictures = [
    process.env.PUBLIC_URL + "/background-images/carousel/1.png",
    process.env.PUBLIC_URL + "/background-images/carousel/2.png",
    process.env.PUBLIC_URL + "/background-images/carousel/3.png",
    process.env.PUBLIC_URL + "/background-images/carousel/4.png",
    process.env.PUBLIC_URL + "/background-images/carousel/5.png",
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handleBack = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  const visibleSlides = pictures.slice(index, index + 3);

  if (visibleSlides.length < 3) {
    visibleSlides.push(...pictures.slice(0, 3 - visibleSlides.length));
  }

  return (
    <>
      <MainContentContainerShop>
        <MainContents>
          <Top>
            <DriverName>Rohit Sharma</DriverName>
            <DriverEarnings>Earnings: 1000</DriverEarnings>
          </Top>
          <ContentContainers>
            <CarouselContainer>
              <Carousel>
                {visibleSlides.map((picture, i) => (
                  <img
                    src={picture}
                    key={i}
                    alt=""
                    style={{
                      width: i === 1 ? "200px" : "150px",
                    }}
                  />
                ))}
              </Carousel>
            </CarouselContainer>
            <NavigationButtons>
              <button onClick={handleBack}>Back</button>
              <button>Buy</button>
              <button onClick={handleNext}>Next</button>
            </NavigationButtons>
          </ContentContainers>
        </MainContents>
      </MainContentContainerShop>
    </>
  );
}
