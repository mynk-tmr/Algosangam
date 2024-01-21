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
];

export default snippets;
