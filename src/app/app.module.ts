import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgShadowModule } from "nativescript-ng-shadow";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NgShadowModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomeDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
