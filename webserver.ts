import { serve } from "https://deno.land/std@0.97.0/http/server.ts";
import { shortenUrl } from "./urlShortener.ts";

const server = serve({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);
shortenUrl("erik");

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";
  console.log(shortenUrl("hello"));

  request.respond({ status: 200, body: bodyContent });
}