import styled from "styled-components";

const GradientText = styled.span`
  background-image: linear-gradient(
    to right,
    ${(props) => props.colors?.join(",")}
  );
  font-size: ${(props) => props.size};
  background-clip: text;
  color: transparent;
  inline-size: fit-content;
  padding-inline: 0.5rem;
`;

export default GradientText;
