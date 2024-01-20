import GradientText from "./GradientText";

export default function BannerSection() {
  return (
    <section>
      <GradientText as="h1" size="7rem" colors={["cyan", "purple", "pink"]}>
        Hllo
      </GradientText>
    </section>
  );
}
