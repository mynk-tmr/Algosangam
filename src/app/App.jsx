import styled from "styled-components";
import BannerSection from "../components/BannerSection";
import Header from "../components/Header";
import StatsDisplay from "../components/StatsDisplay";
import FeatureIntro from "../components/FeatureIntro";
import SnipperCard from "../components/SnippetCard";

const Section = styled.section`
  display: grid;
  min-height: 100vh;
  margin-bottom: 2rem;
`;

export default function App() {
  return (
    <>
      <Section>
        <Header />
        <BannerSection />
      </Section>
      <StatsDisplay />
      <FeatureIntro />
      <section style={{ height: "100vh", padding: "1rem" }}>
        <SnipperCard />
      </section>
    </>
  );
}
