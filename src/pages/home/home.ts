import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }

  start() {
    return this.navCtrl.setRoot(TabsPage);
  }
}
