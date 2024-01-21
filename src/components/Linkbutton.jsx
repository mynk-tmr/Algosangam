import styled from "styled-components";
import GlowContainer from "./GlowContainer";

let Linkbutton = styled(GlowContainer)`
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${(props) => props.$color ?? "red"};
    box-shadow: none;
  }
`;

export default Linkbutton;
