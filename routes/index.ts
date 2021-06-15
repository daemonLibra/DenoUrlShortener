import { Router, shortenUrl, getShortUrl, isValidHttpUrl } from "../deps.ts";

const router = Router();
const dbname = "url.db";
let short = "";

// GET home page.
router.get("/", (_req, res, _next) => {
  res.render("index", {
    title: "URL Shortener",
    short: short,
  });
});

router.get("/:url", (_req, res, _next) => {
  res.redirect(getShortUrl(_req.params.url, dbname));
});

router.post("/", (_req, res, _next) => {
  if (_req.body.url == null) {
    res.send("Url is not valid, try again");
  } else if (isValidHttpUrl(_req.body.url) == true) {
    short = `http://localhost:3000/${shortenUrl(_req.body.url, dbname)}`;
    res.redirect("/");
  } else if (_req.body.url.includes("https") || _req.body.url.includes("http")) {
    res.send("Url is not valid, try again");
  } else {
    let abc = `https://${_req.body.url}`;
    if (isValidHttpUrl(abc) == true) {
      short = `http://localhost:3000/${shortenUrl(abc, dbname)}`;
      res.redirect("/");
    } else {
      res.send("Url is not valid, try again");
    }
  }
});

export default router;
