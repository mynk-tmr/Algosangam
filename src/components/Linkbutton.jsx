import styled from "styled-components";

const Linkbutton = styled.a`
  display: flex;
  border: 1px solid ${(props) => props.glow};
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  gap: ${(props) => props.gap ?? "0.5rem"};
  transition: all 0.2s ease-in;
  &:hover {
    color: ${(props) => props.glow ?? "red"};
  }
`;

export default Linkbutton;
