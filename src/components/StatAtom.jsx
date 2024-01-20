import styled from "styled-components";
import GlowContainer from "./GlowContainer";

const Wrapper = styled(GlowContainer)`
  padding-right: 1rem;
  code {
    font-size: 1.25rem;
  }
  .icon {
    font-size: 2rem;
    background: ${(props) => props.color};
    padding: 0 0.5rem;
  }
`;

export default function StatAtom({ bgcol, stat, value, slot }) {
  return (
    <Wrapper color={bgcol} gap="1.1rem">
      {slot}
      <span>
        <code>{value}</code>
        <br />
        <small>{stat}</small>
      </span>
    </Wrapper>
  );
}
