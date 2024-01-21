import styled from "styled-components";

const Wrapper = styled.article`
  border: 5px solid ${(props) => props.$color};
  border-radius: 15px;
  display: grid;
  padding: 1rem 0.5rem;
  translate: 0 ${(props) => props.$translateY};
  transition: all 0.33s ease-in-out;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
