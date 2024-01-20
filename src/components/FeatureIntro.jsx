import styled from "styled-components";
import GradientText from "./GradientText";
import { useState, Fragment } from "react";

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
  const features = [
    {
      head: "Collections",
      text: "Easily upload and keep track of code snippets that are important to you. Create a post, upload it, and never waste your time finding code snippets again.",
      headcolors: ["firebrick", "orange"],
      textcolors: ["white", "lightgreen"],
    },
  ];
  return (
    <Section>
      <section className="gifbox">Gif</section>
      <section className="info">
        {features.map(
          ({ headcolors, head, textcolors, text }, index) =>
            index === activeIndex && (
              <Fragment key={index}>
                <GradientText as="h2" size="2.5rem" $colors={headcolors}>
                  {head}
                </GradientText>
                <GradientText as="p" size="1.25rem" $colors={textcolors}>
                  {text}
                </GradientText>
              </Fragment>
            )
        )}
      </section>
    </Section>
  );
}
