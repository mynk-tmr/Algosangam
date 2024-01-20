import styled from "styled-components";

const Wrapper = styled.article`
  display: inline-flex;
  gap: 1.1rem;
  border: 1px solid ${(props) => props.color};
  box-shadow: 2px 0 5px ${(props) => props.color};
  border-radius: 5px;
  padding: 0.25rem;
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
    <Wrapper color={bgcol}>
      {slot}
      <span>
        <code>{value}</code>
        <br />
        <small>{stat}</small>
      </span>
    </Wrapper>
  );
}
