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

  nav {
    display: flex;
    gap: 2rem;
    padding: 0 2rem;
    font-size: large;
  }
`;

export default function BannerSection() {
  return (
    <Section>
      <GradientText as="h1" size="7rem" colors={["cyan", "purple", "pink"]}>
        Algo Sangam
      </GradientText>
      <nav>
        <Linkbutton glow="cyan">
          <LoginIco /> Sign In
        </Linkbutton>
        <Linkbutton glow="pink">
          <HeartIco /> Donate
        </Linkbutton>
        <Linkbutton glow="dodgerblue">
          <GroupsIco /> See Community
        </Linkbutton>
      </nav>
    </Section>
  );
}
