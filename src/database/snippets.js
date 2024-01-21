const snippets = [
  {
    title: `Simple Bunjs Server`,
    likes: `3`,
    views: `122`,
    date: new Date(2024, 1, 3),
    lang: `javascript`,
    content: `Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});`,
  },
  {
    title: `Check prime number in Rust`,
    likes: `1`,
    views: `53`,
    date: new Date(2023, 11, 13),
    lang: `rust`,
    content: `fn is_prime(n: u32) -> bool {
  if n <= 1 return false;
  for a in 2..n {
      if n % a == 0 return false;
    }
  true
}`,
  },
  {
    title: `useSignal in Reactjs`,
    likes: `4`,
    views: `200`,
    date: new Date(2024, 0, 13),
    lang: `jsx`,
    content: `function useSignal(init) {
  const [state, setState] = useState(init);
  return {
    get mut() { return state },
    set mut(_new) { setState(_new) }
  }
}`,
  },
  {
    title: `Binary Search in GoLang`,
    likes: `3`,
    views: `101`,
    date: new Date(2023, 10, 20),
    lang: `go`,
    content: `func binary_search(array []int64, to_search int64) bool {
  found := false
  low := 0
  high := len(array) - 1
  for low <= high {
    mid := (low + high) / 2
    if array[mid] == to_search {
      found = true
      break
    }
    if array[mid] > to_search {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return found
}`,
  },
];

export default snippets;
