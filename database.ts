import { DB } from "https://deno.land/x/sqlite/mod.ts";

export class UrlDatabase{
    db: DB;

    constructor(){
        this.db = new DB("url.db");
        this.db.query(
            "CREATE TABLE IF NOT EXISTS urls (url TEXT, shortUrl TEXT, UNIQUE(url))"
          );
    }

    insert(url: string, shortenUrl: string){
        this.db.query("INSERT OR IGNORE INTO urls (url, shortUrl) VALUES (?, ?)", [url, shortenUrl]);
    }

    printUrls(){
        for (const [url, shortUrl] of this.db.query("SELECT url, shortUrl FROM urls")) {
            console.log(url, shortUrl);
          }
    }

    getId(url: string){
        for (const [abc] of this.db.query("SELECT rowid FROM urls WHERE url= ? ", [url])){
            return abc;
        }  
    }

    close(){
        this.db.close();
    }
}

