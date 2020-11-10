import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { timer } from "rxjs";
import { LoadEventData, WebView } from "tns-core-modules/ui/web-view";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
var webViewInterfaceModule = require('nativescript-webview-interface');
var oWebViewInterface;

@Component({
    selector: "ns-home-detail",
    templateUrl: "./home-detail.component.html",
    styleUrls: ["./home-detail.component.css"],
})
export class HomeDetailComponent implements OnInit {
    constructor(
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute
    ) {}
    //Degisken tanımları yapıldı.
    fetchLink: any;
    linkConvert: any;
    webViewSrc = "";

    ngOnInit() {}
    //WebView yüklenirken çalışan fonk.
    async onLoadStarted(args) {
        const webView = args.object as WebView;
        if (!args.error) {

        } else {
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
        }
    }

    //Ön taraftan gelen linkin yakalndığı yer ve yükleme bitince calısan yer.
    onLoadFinished(args) {
        const webView = args.object as WebView;
        if (!args.error) {

            this.fetchLink = this.route.snapshot.params[0];
            this.linkConvert = this.fetchLink + "/";
            console.log("fetchLink", this.linkConvert);
        } else {
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
        }

        getString(this.linkConvert).then((r: string) => {
           let x= webView.android.loadData(r, 'text/html', null);
           console.log('x',x)
        }, (e) => {
        });

    }
    //Geri butonu
    goBack() {
        this.routerExtensions.backToPreviousPage();
    }

}
