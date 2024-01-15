import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const upd = () => setCount(count + 1);
  return <button onClick={upd}>Clicked : {count}</button>;
}