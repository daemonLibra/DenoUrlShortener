import { Router } from "../deps.ts";
import { shortenUrl, getShortUrl } from "../deps.ts";

const router = Router();

// GET home page.
router.get("/", (_req, res, _next) => {
  res.render("index", {
    title: "Opine",
  });
});

router.get("/:url", (_req, res, _next) => {
  const test = getShortUrl(_req.params.url);
  console.log(test);
  res.redirect(`https://${test}`);
});

router.post("/", (_req, res, _next) => {
  res.send(`http://localhost:3000/${shortenUrl(_req.body.url)}`);
});
export default router;
