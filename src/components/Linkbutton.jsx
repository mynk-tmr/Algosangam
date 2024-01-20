import styled from "styled-components";

const Linkbutton = styled.a`
  display: inline-flex;
  cursor: pointer;
  border: 1px solid ${(props) => props.glow};
  border-radius: 5px;
  box-shadow: 2px 0 10px ${(props) => props.glow};
  padding: 0.25rem 0.5rem;
  gap: ${(props) => props.gap ?? "0.5rem"};
  transition: all 0.2s ease-in;
  &:hover {
    color: ${(props) => props.glow ?? "red"};
    box-shadow: none;
  }
`;

export default Linkbutton;
