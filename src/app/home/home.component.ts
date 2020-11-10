import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { RouterExtensions } from 'nativescript-angular/router';
import Theme from "@nativescript/theme";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService,public routerExtensions: RouterExtensions) { }

  //Değişkenlerimin tanımlandığı yer.
  xmlToJson: any;
  jsonDetail:any[];
  itemElement:any[]=[];
  xmlData:any[]=[];
  first5Element:any[]=[];
  mode="Gece Modu";

  //Ekran ilk açılırken wiredServise fonk. çağırdım.
  ngOnInit() {
      this.wiredServis();
  }
  //Servisten gelen xml datayı alıp xmlDataTaking'e gönderdim
  wiredServis() {
    this.homeService.fetchWiredData().subscribe((resp) => {
        this.xmlData=resp;
        this.xmlDataTaking(this.xmlData)
    });
  }

  //XML şeklinde gelen datayı JSON'a çevirip gerekli array işlemlerini yapıp HTML tarafına gönderdim.
  xmlDataTaking(xmlVal) {
    this.xmlToJson = this.homeService.xmlToJson(xmlVal);
    this.jsonDetail=this.xmlToJson.rss.channel
    this.jsonDetail.forEach(x=>{
        this.itemElement=x.item
        return x.item
    })
    this.first5Element=this.itemElement.slice(0,5)
  }
  //Dark Mode & Light Mode fonksiyonu
  changeMode() {
    //console.log("thieme", Theme.getMode());
    Theme.setMode(
        Theme.getMode() === Theme.Light ? Theme.Dark : Theme.Light
    );
  }
}
