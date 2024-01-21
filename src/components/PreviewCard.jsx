import styled from "styled-components";
import GlowContainer from "./GlowContainer";

const Wrapper = styled(GlowContainer)`
  flex-direction: column;
  border-width: 5px;
  border-radius: 15px;
  box-shadow: 0 15px 20px ${(props) => props.$color};
  translate: 0 ${(props) => props.$translateY};
  transition: all 0.33s ease-in-out;
  cursor: zoom-in;

  > h1 {
    flex-grow: 1;
    text-align: center;
  }

  > img {
    object-fit: cover;
    flex-grow: 2;
  }
`;

export default function PreviewCard({
  head,
  $color,
  $bgimage,
  isActive,
  onClick,
}) {
  return (
    <Wrapper
      {...{ $color, $bgimage, $translateY: isActive ? "-25px" : "0" }}
      onClick={onClick}>
      <h1>{head}</h1>
      <img src={$bgimage} />
    </Wrapper>
  );
}
