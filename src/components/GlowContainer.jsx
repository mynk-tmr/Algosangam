import styled from "styled-components";

const GlowContainer = styled.article`
  display: inline-flex;
  border: 1px solid ${(props) => props.color};
  box-shadow: 2px 0 5px ${(props) => props.color};
  border-radius: 5px;
  padding: 0.25rem;
  gap: ${(props) => props.gap ?? "0.5rem"};
`;

export default GlowContainer;
