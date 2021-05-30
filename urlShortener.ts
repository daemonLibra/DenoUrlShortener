import { UrlDatabase } from "./database.ts";

    function createCode(){
        const map = new String("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
        const size: number = Math.floor(Math.random() * 5) +1;
        let newNumber = "";

        for (var _i = 0; _i < size; _i++) {
            newNumber += map[Math.floor(Math.random() * 61)];
            
        }
        console.log(newNumber);
        return newNumber;
    }

    export function shortenUrl(url: string){
        const db = new UrlDatabase();
        const shortUrl = createCode();// dont create code if already exists or url already exists ToDo
        db.insert(url, shortUrl);
        db.printUrls();
        return shortUrl;
    }


    

