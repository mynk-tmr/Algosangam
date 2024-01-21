import SnippetCard from "./SnippetCard";
import snippets from "../database/snippets";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 1rem;
  align-content: start;
`;

export default function SnippetContainer() {
  return (
    <Wrapper style={{ height: "100vh", padding: "1rem" }}>
      {snippets.map((snip, index) => (
        <SnippetCard {...snip} key={index} />
      ))}
    </Wrapper>
  );
}
