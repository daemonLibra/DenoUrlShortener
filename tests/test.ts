import { assertEquals, assertMatch } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { readLine, shortenUrl,isValidHttpUrl } from "../deps.ts";
import { UrlDatabase } from "../database.ts";

Deno.test({
    name: "1000 Url",
    async fn() { 
        const reader = await readLine("./tests/urllist.txt");
        for await (let value of reader) {
            shortenUrl(value, "test.db");  
        }
        const db = new UrlDatabase("test.db");
        assertEquals(db.getLength(), 1000);
        db.close();
    },
    // following two options deactivate open resource checking
    sanitizeResources: false,
    sanitizeOps: false
  });

  Deno.test({
    name: "Invalid Url",
     fn() { 
        assertEquals(isValidHttpUrl("google.de"),false);
    }
  });

  Deno.test({
    name: "length of max 5",
    async fn() { 
        const db = new UrlDatabase("test.db");
        const reader = await readLine("./tests/urllist.txt");
        const rege = new RegExp("^[1-5]$");
        for await (let value of reader) {
            let shortUrl: string = db.getShortUrl(value);
            assertMatch(String(shortUrl.length), rege);
        }
        db.close();
    },
    // following two options deactivate open resource checking
    sanitizeResources: false,
    sanitizeOps: false
  });



