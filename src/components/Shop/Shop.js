import {
  MainContentContainerShop,
  NavigationButtons,
  Top,
  Carousel,
  DriverEarnings,
  ContentContainers,
  MainContents,
  CarouselItem,
} from "./ShopStyles";
import { useState, useEffect } from "react";
import { imageLinks } from "../background-images-links/Links";

export default function Shop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const numbers = Math.floor(Math.random() * imageLinks.length);

    document.body.style.backgroundImage = `url(${imageLinks[numbers]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const pictures = [
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/1.png",
      name: "Headset",
      amount: 501,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/2.png",
      name: "Speaker",
      amount: 199,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/3.png",
      name: "Mini Speaker",
      amount: 52,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/4.png",
      name: "Headset and Charger",
      amount: 177,
    },
    {
      bg: process.env.PUBLIC_URL + "/background-images/carousel/5.png",
      name: "White Headset",
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
            <DriverEarnings>Earnings: 1000</DriverEarnings>
            <DriverEarnings>
              After Purchase: {1000 - visibleSlides[2].amount}
            </DriverEarnings>
          </Top>
          <ContentContainers>
            <Carousel>
              {visibleSlides.map((picture, i) => (
                <CarouselItem>
                  <h4>{picture.name}</h4>
                  <p>$ {picture.amount}</p>
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
              <button>Purchase</button>
              <button onClick={handleNext}>Next</button>
            </NavigationButtons>
          </ContentContainers>
        </MainContents>
      </MainContentContainerShop>
    </>
  );
}
