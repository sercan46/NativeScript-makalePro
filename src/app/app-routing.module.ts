import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomeDetailComponent } from "./home/home-detail/home-detail.component";


const routes: Routes = [
    //Route tanımlamalarım yapıldı HomeComponent(Makale Listesi)-   HomeDetailComponent(Tıklanan makalenin detayı)
    { path: "",  component: HomeComponent, pathMatch: "full" },
    { path: ":link", component: HomeDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
