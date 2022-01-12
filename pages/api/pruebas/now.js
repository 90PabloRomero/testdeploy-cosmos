export default function now(req, res) {
  const date = new Date();
  const format = date.toGMTString();

  res.setHeader("cache-control", "s-maxage=10, stale-while-revalidate");

  res.json({ now: format });
}
