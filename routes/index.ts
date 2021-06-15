import { Router, shortenUrl, getShortUrl, isValidHttpUrl } from "../deps.ts";

const router = Router();

// GET home page.
router.get("/", (_req, res, _next) => {
  res.render("index", {
    title: "URL Shortener",
  });
});

router.get("/:url", (_req, res, _next) => {
    res.redirect(getShortUrl(_req.params.url));  
});

router.post("/", (_req, res, _next) => {
    if(isValidHttpUrl(_req.body.url) == true){
      res.send(`http://localhost:3000/${shortenUrl(_req.body.url)}`);
    } else if (_req.body.url.includes("https") || _req.body.url.includes("http")){
      res.send("Url is not valid, try again");
    } else {
      let abc = `https://${_req.body.url}`;
      if(isValidHttpUrl(abc) == true){
        res.send(`http://localhost:3000/${shortenUrl(abc)}`);
      } else {
        res.send("Url is not valid, try again");
      }
    }
});
export default router;
