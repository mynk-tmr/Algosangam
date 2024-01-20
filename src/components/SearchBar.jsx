import { SearchIco } from "../shared/icons";
import styled from "styled-components";

const Search = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: max-content;
  padding: 0.25rem 1rem;
  input {
    all: inherit;
    border: none;
    opacity: 0.6;
  }
  &:focus-within {
    border-color: ${(props) => props.glow};
  }
`;

export default function SearchBar(props) {
  return (
    <Search as="search" glow={props.glow}>
      <SearchIco />
      <input {...props} />
    </Search>
  );
}
