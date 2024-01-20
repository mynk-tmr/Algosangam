import styled from "styled-components";
import { CodeIco, SnippetIco, UploadIco, UserIco } from "../shared/icons";
import StatAtom from "./StatAtom";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  border-block: 1px solid;
  padding: 4rem;
  gap: 5rem 1rem;

  .heading {
    grid-column: 2/-2;
    font-size: 2rem;
  }
`;

export default function StatsDisplay() {
  return (
    <Section>
      <StatAtom bgcol="purple" stat="Users" value="121" slot={<UserIco />} />
      <StatAtom
        bgcol="peru"
        stat="Snippets"
        value="927"
        slot={<SnippetIco />}
      />
      <StatAtom
        bgcol="darkgreen"
        stat="Languages"
        value="48"
        slot={<CodeIco />}
      />
      <StatAtom
        bgcol="dodgerblue"
        stat="Uploads"
        value="∞"
        slot={<UploadIco />}
      />
      <h2 className="heading">
        We are a quickly growing community.
        <br />
        We want amazing contributors like you and your friends.
      </h2>
    </Section>
  );
}
