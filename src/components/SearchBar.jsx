import { SearchIco } from "../shared/icons";
import styled from "styled-components";

const Search = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
  width: fit-content;
  padding: 0.25rem 1rem;
  input {
    all: inherit;
    border: none;
    opacity: 0.6;
    width: ${(props) => props.width};
  }
  &:focus-within {
    border-color: ${(props) => props.$glow};
  }
`;

export default function SearchBar({ width, $glow, ...rest }) {
  return (
    <Search {...{ width, $glow }} onSubmit={(e) => e.preventDefault()}>
      <SearchIco />
      <input {...rest} />
    </Search>
  );
}
