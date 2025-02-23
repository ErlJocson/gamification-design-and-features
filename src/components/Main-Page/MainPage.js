import {
  MainPageContainer,
  ContentContainer,
  MetricContainer,
  MetricTable,
  TextContainer,
  Gauge,
  MetricType,
  CustomizationContainer,
} from "./MainPageStyles";
import { useEffect, useState } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import Button from "./Button";
import { imageLinks } from "../background-images-links/Links";

export default function MainPage() {
  useEffect(() => {
    const numbers = Math.floor(Math.random() * imageLinks.length);

    document.body.style.backgroundImage = `url(${imageLinks[numbers]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const [showBackground, setShowBackground] = useState(false);

  const handleViewCarButton = () => {
    console.log(showBackground);
    setShowBackground(!showBackground);
  };

  return (
    <>
      <Button onClick={handleViewCarButton} />
      <MainPageContainer style={{ display: showBackground ? "none" : "flex" }}>
        <ContentContainer>
          <MetricContainer>
            <TextContainer>
              <div>
                <h3>ROHIT SHARMA</h3>
                <h4>Performance for the month of June</h4>
              </div>
            </TextContainer>
            <MetricTable>
              <MetricType>
                <p>
                  <span>Average Handle Time</span>
                </p>
                <Gauge>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "180px" }}
                    ></div>
                    <div className="line-bar"></div>
                    <div
                      className="progress-bar-unfilled"
                      style={{ width: "180px" }}
                    ></div>
                  </div>
                  <h3>300s</h3>
                </Gauge>
              </MetricType>

              <MetricType>
                <p>
                  <span>Attrition</span>
                </p>
                <Gauge>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "200px" }}
                    ></div>
                    <div className="line-bar"></div>
                    <div
                      className="progress-bar-unfilled"
                      style={{ width: "160px" }}
                    ></div>
                  </div>
                  <h3>50%</h3>
                </Gauge>
              </MetricType>

              <MetricType>
                <p>
                  <span>Customer Satisfaction</span>
                </p>
                <Gauge>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "200px" }}
                    ></div>
                    <div className="line-bar"></div>
                    <div
                      className="progress-bar-unfilled"
                      style={{ width: "160px" }}
                    ></div>
                  </div>
                  <h3>50%</h3>
                </Gauge>
              </MetricType>

              <MetricType>
                <p>
                  <span>AR</span>
                </p>
                <Gauge>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "100px" }}
                    ></div>
                    <div className="line-bar"></div>
                    <div
                      className="progress-bar-unfilled"
                      style={{ width: "260px" }}
                    ></div>
                  </div>
                  <h3>25%</h3>
                </Gauge>
              </MetricType>
            </MetricTable>
          </MetricContainer>

          <MetricContainer>
            <TextContainer></TextContainer>
            <MetricTable>
              <CustomizationContainer>
                <h3 className="h3-title">CUSTOMIZATION RATING</h3>
                <p>
                  <IoCarSportOutline
                    style={{ color: "white", fontSize: "48px" }}
                  />
                  95.0%
                </p>
              </CustomizationContainer>

              <Gauge>
                <div className="progress">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar-black"></div>
                  <div className="bar-black"></div>
                  <div className="bar-black"></div>
                  <div className="bar-black"></div>
                  <div className="bar-black"></div>
                </div>
              </Gauge>
            </MetricTable>
          </MetricContainer>
        </ContentContainer>
      </MainPageContainer>
    </>
  );
}
