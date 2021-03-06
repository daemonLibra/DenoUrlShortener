import { UrlDatabase } from "./deps.ts";

function createCode() {
    const map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const size: number = Math.floor(Math.random() * 5) + 1;
    let code = "";

    for (var _i = 0; _i < size; _i++) {
        code += map[Math.floor(Math.random() * 61)];
    }
    return code;
}

export function shortenUrl(url: string, dbname: string) {
    const db = new UrlDatabase(dbname);
    const shortUrl = createCode();
    db.insert(url, shortUrl);
    db.close();
    return shortUrl;
}

export function getShortUrl(shortUrl: string, dbname: string) {
    const db = new UrlDatabase(dbname);
    const code = db.getId(shortUrl);
    db.close();
    return code;
}




