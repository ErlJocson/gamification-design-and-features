import {
  MainContentContainerShop,
  NavigationButtons,
  Top,
  Carousel,
  DriverName,
  DriverEarnings,
  ContentContainers,
  MainContents,
  CarouselItem,
} from "./ShopStyles";
import { useState, useEffect } from "react";

export default function Shop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundImage = `url("/gamification-design-and-features/background-images/Parts/Home.png")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const pictures = [
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/1.png",
      amount: 501,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/2.png",
      amount: 199,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/3.png",
      amount: 52,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/4.png",
      amount: 177,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/5.png",
      amount: 298,
    },
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handleBack = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  const visibleSlides = pictures.slice(index, index + 5);

  if (visibleSlides.length < 5) {
    visibleSlides.push(...pictures.slice(0, 5 - visibleSlides.length));
  }

  return (
    <>
      <MainContentContainerShop>
        <MainContents>
          <Top>
            <DriverName>Rohit Sharma</DriverName>
            <div>
              <DriverEarnings>Earnings: 1000</DriverEarnings>
              <DriverEarnings>
                After Purchase: {1000 - visibleSlides[2].amount}
              </DriverEarnings>
            </div>
          </Top>
          <ContentContainers>
            <Carousel>
              {visibleSlides.map((picture, i) => (
                <CarouselItem>
                  <p>{picture.amount} $</p>
                  <img
                    src={picture.bg}
                    className="dark-shadow"
                    key={i}
                    alt=""
                    style={{
                      height: i === 2 ? "280px" : "150px",
                      width: "180px",
                    }}
                  />
                </CarouselItem>
              ))}
            </Carousel>

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
