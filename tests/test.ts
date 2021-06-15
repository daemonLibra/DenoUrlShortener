import { assertEquals, assertMatch } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { readLine, shortenUrl,isValidHttpUrl } from "../deps.ts";
import { UrlDatabase } from "../database.ts";

try {
  await Deno.remove("./tests/test.db");
}
catch (e) {
  console.log(e);
}


Deno.test({
    name: "1000 Url lead to unique short urls",
    async fn() { 
        const reader = await readLine("./tests/urllist.txt");
        for await (let value of reader) {
            shortenUrl(value, "./tests/test.db");  
        }
        const db = new UrlDatabase("./tests/test.db");
        assertEquals(db.getLength(), 1000);
        db.close();
    },
    sanitizeResources: false,
    sanitizeOps: false
  });

  Deno.test({
    name: "Invalid Url",
     fn() { 
        assertEquals(isValidHttpUrl("w.google.de"),false);
    }
  });

  Deno.test({
    name: "Valid Url",
     fn() { 
        assertEquals(isValidHttpUrl("https://www.google.de"),true);
    }
  });

  Deno.test({
    name: "Insert new Url to the database",
    async fn() { 
        shortenUrl("https://protonvpn.com", "./tests/test.db");
        const db = new UrlDatabase("./tests/test.db");
        assertEquals(db.getLength(), 1001);
        db.close();
    },
    sanitizeResources: false,
    sanitizeOps: false
  });

  Deno.test({
    name: "length of max 5",
    async fn() { 
        const db = new UrlDatabase("./tests/test.db");
        const reader = await readLine("./tests/urllist.txt");
        const rege = new RegExp("^[1-5]$");
        for await (let value of reader) {
            let shortUrl: string = db.getShortUrl(value);
            assertMatch(String(shortUrl.length), rege);
        }
        db.close();
    },
    sanitizeResources: false,
    sanitizeOps: false
  });



