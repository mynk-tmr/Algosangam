import styled from "styled-components";

const Linkbutton = styled.a`
  display: flex;
  gap: ${(props) => props.gap ?? "1rem"};
  transition: all 0.2s ease-in;
  &:hover {
    color: ${(props) => props.glow};
  }
`;

export default Linkbutton;
