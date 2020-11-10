import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class HomeService {

    jsonConverter: any;
    constructor(public http: HttpClient) {}

    //Wired data http get atılan fonk.
    fetchWiredData(): any {
        return this.http
            .get("https://www.wired.com/feed/rss", {
                responseType: "text",
            })
            .pipe(
                map((response) => {
                    this.xmlToJson(response);
                    return response;
                })
            );
    }

    //Gelen XML datasının json'a çevrildiği fonk.
    xmlToJson(XML) {
        let result;
        var parseString = require("nativescript-xml2js").parseString;
        var xml = XML;
        parseString(xml, function (err, res) {
            console.log('Error!',err)
            result= res;
        });
        this.jsonConverter=result
        return this.jsonConverter
    }
}

