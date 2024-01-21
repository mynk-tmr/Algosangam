import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ children, lang }) {
  return (
    <SyntaxHighlighter language={lang} style={dracula} showLineNumbers={true}>
      {children}
    </SyntaxHighlighter>
  );
}
