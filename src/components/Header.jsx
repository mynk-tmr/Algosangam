import { HelpIco, ThemeIco } from "../shared/icons";
import Linkbutton from "./Linkbutton";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  font-size: 1.125rem;
  > * {
    display: flex;
    gap: 1rem;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <a>LOGO</a>
      <SearchBar
        style={{ width: "30ch" }}
        placeholder="Search Algosangam ..."
      />
      <nav>
        <Linkbutton glow="lightpink">
          <HelpIco /> Get Help
        </Linkbutton>
        <Linkbutton glow="yellow">
          <ThemeIco /> Switch Theme
        </Linkbutton>
      </nav>
    </Wrapper>
  );
}
