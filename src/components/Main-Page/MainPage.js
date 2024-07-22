import React from "react";

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
                    <strong>Metric 1</strong>
                  </p>
                  <p>100%</p>
                </div>
                <div>
                  <p>
                    <IoCall />
                    <strong>Metric 1</strong>
                  </p>
                  <p>100%</p>
                </div>
                <div>
                  <p>
                    <IoCall />
                    <strong>Metric 1</strong>
                  </p>
                  <p>100%</p>
                </div>
                <div>
                  <p>
                    <IoCall />
                    <strong>Metric 1</strong>
                  </p>
                  <p>100%</p>
                </div>
              </MetricTable>
            </MetricContainer>
          </SomeContainer>
        </ContentContainer>
      </MainPageContainer>
    </>
  );
}
