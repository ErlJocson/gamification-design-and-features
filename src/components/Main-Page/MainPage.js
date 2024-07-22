import {
  MainPageContainer,
  ContentContainer,
  MetricContainer,
  MetricTable,
  TextContainer,
  CircleDIV,
} from "./MainPageStyles";

export default function MainPage() {
  return (
    <>
      <MainPageContainer>
        <ContentContainer>
          <MetricContainer>
            <TextContainer>
              <h2>ROHIT SHARMA</h2>
              <h3>Performance for the month of June</h3>
            </TextContainer>
            <MetricTable>
              <div>
                <p>
                  <strong>AHT</strong>
                </p>
                <h3 className="text-gradient">300s</h3>
              </div>

              <div>
                <p>
                  <strong>ATR</strong>
                </p>
                <h3 className="text-gradient">100%</h3>
              </div>

              <div>
                <p>
                  <strong>CSAT</strong>
                </p>
                <h3 className="text-gradient">100%</h3>
              </div>

              <div>
                <p>
                  <strong>AR</strong>
                </p>
                <h3 className="text-gradient">NA</h3>
              </div>
            </MetricTable>
          </MetricContainer>
        </ContentContainer>
      </MainPageContainer>
    </>
  );
}
