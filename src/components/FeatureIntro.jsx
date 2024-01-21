import styled from "styled-components";
import GradientText from "./GradientText";
import { useState } from "react";
import { features } from "../database/data";
import PreviewCard from "./PreviewCard";
import useAnimatedRef from "../shared/hooks/useAnimatedRef";
import fadeIn from "../shared/keyframes/fadeIn";

const Section = styled.section`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  min-height: 100vh;
  > * {
    padding: 3rem;
    display: grid;
  }

  .animate {
    animation: ${fadeIn} 300ms ease-in;
  }

  .gifbox {
    background: gray;
    grid-row: span 2;
    place-self: center;
  }

  .slider {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 1rem;
  }
`;

export default function FeatureIntro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { head, text, colors, gif } = features[activeIndex];
  const ref = useAnimatedRef(300);
  return (
    <Section>
      <img src={gif} className="gifbox" />
      <section ref={ref}>
        <GradientText as="h2" size="2.5rem" $colors={colors}>
          {head}
        </GradientText>
        <GradientText as="p" size="1.25rem" $colors={["white", colors[1]]}>
          {text}
        </GradientText>
      </section>
      <section className="slider">
        {features.map((item, index) => (
          <PreviewCard
            head={item.head}
            $color={item.colors[0]}
            $bgimage={item.gif}
            key={index}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </section>
    </Section>
  );
}
