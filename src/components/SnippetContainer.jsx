import SnippetCard from "./SnippetCard";
import snippets from "../database/snippets";

export default function SnippetContainer() {
  return (
    <section style={{ height: "100vh", padding: "1rem" }}>
      {snippets.map((snip, index) => (
        <SnippetCard {...snip} key={index} />
      ))}
    </section>
  );
}
