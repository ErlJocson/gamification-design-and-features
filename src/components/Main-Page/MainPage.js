import { IoCall } from "react-icons/io5";
import {
  MainPageContainer,
  ContentContainer,
  SomeContainer,
  MetricContainer,
  MetricTable,
} from "./MainPageStyles";

export default function MainPage() {
  return (
    <>
      <MainPageContainer>
        <ContentContainer>
          <SomeContainer>
            <MetricContainer>
              <h2>ROHIT SHARMA</h2>
              <h3>Performance for the month of June</h3>
              <MetricTable>
                <div>
                  <p>
                    <IoCall />
                    <strong>AHT</strong>
                  </p>
                  <h3>300s</h3>
                </div>
                <div>
                  <p>
                    <IoCall />
                    <strong>ATR</strong>
                  </p>
                  <h3>100%</h3>
                </div>
                <div>
                  <p>
                    <IoCall />
                    <strong>CSAT</strong>
                  </p>
                  <h3>100%</h3>
                </div>
                <div>
                  <p>
                    <IoCall />
                    <strong>AR</strong>
                  </p>
                  <h3>NA</h3>
                </div>
              </MetricTable>
            </MetricContainer>
          </SomeContainer>
        </ContentContainer>
      </MainPageContainer>
    </>
  );
}
