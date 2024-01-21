import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ children, lang }) {
  return (
    <SyntaxHighlighter language={lang} style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  );
}
