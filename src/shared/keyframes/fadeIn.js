import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    translate: 0 50px;
    opacity: 0;
  }
  to {
    translate: 0;
    opacity: 1;
  }
`;

export default fadeIn;
