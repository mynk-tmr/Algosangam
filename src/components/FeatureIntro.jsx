import styled from "styled-components";
import GradientText from "./GradientText";
import { useState, Fragment } from "react";
import { features } from "../database/data";

const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 100vh;
  padding: 4rem;

  .gifbox {
    background: gray;
    grid-row: span 2;
  }

  .info {
    padding: 3rem;
    display: grid;
  }
`;

export default function FeatureIntro() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section>
      <section className="gifbox">Gif</section>
      <section className="info">
        {features.map(
          ({ headcolors, head, text }, index) =>
            index === activeIndex && (
              <Fragment key={index}>
                <GradientText as="h2" size="2.5rem" $colors={headcolors}>
                  {head}
                </GradientText>
                <GradientText
                  as="p"
                  size="1.25rem"
                  $colors={["white", headcolors.at(1)]}>
                  {text}
                </GradientText>
              </Fragment>
            )
        )}
      </section>
      <section className="slider">
        <button
          onClick={() => setActiveIndex((1 + activeIndex) % features.length)}>
          Next
        </button>
      </section>
    </Section>
  );
}
