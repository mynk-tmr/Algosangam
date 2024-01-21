import styled from "styled-components";
import { ClockIco, CodeIco, EyeIco, LikeIco } from "../shared/icons";
import CodeBlock from "./CodeBlock";
import { useState } from "react";
import Linkbutton from "./Linkbutton";

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
  [data-code] {
    margin-top: 1rem;
  }
`;

export default function SnipperCard({
  title,
  likes,
  views,
  date,
  lang,
  content,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Wrapper>
      <h1>{title}</h1>
      <data data-likes>
        <LikeIco /> {likes} likes
      </data>
      <data data-views>
        <EyeIco /> {views} views
      </data>
      <time>
        <ClockIco /> {date?.toLocaleDateString()}
      </time>
      <data data-lang>
        <CodeIco /> {lang}
      </data>
      <figure data-code>
        <CodeBlock lang={lang}>
          {open ? content : content.slice(0, 80) + "......."}
        </CodeBlock>
      </figure>
      <Linkbutton $color="lightgreen" onClick={toggle}>
        {open ? "Fold" : "Expand"} Snippet
      </Linkbutton>
    </Wrapper>
  );
}
