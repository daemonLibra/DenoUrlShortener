import {
  createError,
  renderFileToString,
  dirname,
  fromFileUrl,
  join,
  json,
  opine,
  serveStatic,
  urlencoded,
} from "./deps.ts";

import type { ErrorRequestHandler } from "./deps.ts";

import indexRouter from "./routes/index.ts";

const __dirname = fromFileUrl(dirname(import.meta.url));

const app = opine();

// View engine setup
app.engine("ejs", renderFileToString);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// Handle different incoming body types
app.use(json());
app.use(urlencoded());

// Serve our static assets
app.use(serveStatic(join(__dirname, "public")));

// Mount our routers
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.setStatus(err.status ?? 500);
  res.render("error", {
    title: "Opine",
  });
};

app.use(errorHandler);  

export default app;
