import styled from "styled-components";
import GradientText from "./GradientText";

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
  return (
    <Section>
      <section className="gifbox">Gif</section>
      <section className="info">
        <GradientText as="h2" size="2.5rem" colors={["firebrick", "orange"]}>
          Collections
        </GradientText>
        <GradientText as="p" size="1.25rem" colors={["white", "lightgreen"]}>
          Easily upload and keep track of code snippets that are important to
          you. Create a post, upload it, and never waste your time finding code
          snippets again.
        </GradientText>
      </section>
    </Section>
  );
}
