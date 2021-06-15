import { DB } from "./deps.ts";

export class UrlDatabase{
    db: DB;

    constructor(dbname: string){
        this.db = new DB(dbname);
        this.db.query(
            "CREATE TABLE IF NOT EXISTS urls (url TEXT, shortUrl TEXT, UNIQUE(url))");
    }

    insert(url: string, shortenUrl: string){
        this.db.query("INSERT OR IGNORE INTO urls (url, shortUrl) VALUES (?, ?)", [url, shortenUrl]);
    }

    printUrls(){
        for (const [url, shortUrl] of this.db.query("SELECT url, shortUrl FROM urls")) {
          }
    }

    getUrl(url: string){
        for (const [abc] of this.db.query("SELECT url FROM urls WHERE url= ? ", [url])){
            return abc;
        } 
    }

    getShortUrl(url: string){
        for (const [abc] of this.db.query("SELECT shortUrl FROM urls WHERE url= ? ", [url])){
            return abc;
        } 
    }

    getId(shortUrl: string){
        for (const [abc] of this.db.query("SELECT url FROM urls WHERE shortUrl= ? ", [shortUrl])){
            return abc;
        }  
    }

    getLength(){
        for (const [abc] of this.db.query("SELECT COUNT(*) FROM urls")){
            return abc;
        } 
    }

    close(){
        this.db.close();
    }
}

