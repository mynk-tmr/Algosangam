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
];

export default snippets;
