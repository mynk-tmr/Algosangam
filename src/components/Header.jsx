import { HelpIco, ThemeIco } from "../shared/icons";
import Linkbutton from "./Linkbutton";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 2rem;
  align-items: center;
  > * {
    display: flex;
    gap: 1rem;
  }
  nav {
    justify-self: end;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <a>LOGO</a>
      <SearchBar
        style={{ width: "30ch" }}
        placeholder="Search Algosangam ..."
        color="cyan"
      />
      <nav>
        <Linkbutton as="a" color="lightgreen">
          <HelpIco /> Get Help
        </Linkbutton>
        <Linkbutton as="a" color="yellow">
          <ThemeIco /> Switch Theme
        </Linkbutton>
      </nav>
    </Wrapper>
  );
}
