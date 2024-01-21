import styled from "styled-components";
import { ClockIco, CodeIco, EyeIco, LikeIco } from "../shared/icons";
import CodeBlock from "./CodeBlock";
import snippets from "../database/snippets";

const Wrapper = styled.section`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid gray;
  h1 {
    font-weight: normal;
    margin-bottom: 0.5rem;
  }
  data,
  time {
    font-family: monospace;
    margin-right: 1rem;
    color: black;
    font-weight: bold;
    padding: 0.1rem;
  }

  .icon {
    translate: 10% 10%;
  }

  time {
    background: palegoldenrod;
  }

  [data-likes] {
    background: cyan;
  }
  [data-views] {
    background: lightpink;
  }
  [data-views] {
    background: lightpink;
  }
  [data-lang] {
    background: lightsteelblue;
  }
`;

export default function SnipperCard() {
  return (
    <Wrapper>
      <h1>Simple Bunjs Server</h1>
      <data data-likes>
        <LikeIco /> 0 likes
      </data>
      <data data-views>
        <EyeIco /> 122 views
      </data>
      <time>
        <ClockIco /> {new Date().toLocaleDateString()}
      </time>
      <data data-lang>
        <CodeIco /> Javascript
      </data>
      <figure data-code>
        <CodeBlock lang={snippets[0].lang}>{snippets[0].content}</CodeBlock>
      </figure>
    </Wrapper>
  );
}
