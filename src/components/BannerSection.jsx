import styled from "styled-components";
import { GroupsIco, HeartIco, LoginIco } from "../shared/icons";
import GradientText from "./GradientText";
import Linkbutton from "./Linkbutton";

const Section = styled.section`
  display: grid;
  min-height: 80vh;
  align-content: center;
  padding: 2rem;
  row-gap: 3rem;
  font-size: large;

  p {
    strong {
      color: gold;
    }
  }
  nav {
    display: flex;
    gap: 2rem;
    padding: 0 2rem;
  }
`;

export default function BannerSection() {
  return (
    <Section>
      <GradientText as="h1" size="7rem" $colors={["cyan", "purple", "pink"]}>
        Algo Sangam
      </GradientText>
      <p>
        Create, Share and Edit code with peers. Use the power of{" "}
        <strong>Spaced-Repetition</strong> to internalise algorithms.
      </p>
      <nav>
        <Linkbutton color="cyan">
          <LoginIco /> Sign In
        </Linkbutton>
        <Linkbutton color="pink">
          <HeartIco /> Donate
        </Linkbutton>
        <Linkbutton color="dodgerblue">
          <GroupsIco /> See Community
        </Linkbutton>
      </nav>
    </Section>
  );
}
