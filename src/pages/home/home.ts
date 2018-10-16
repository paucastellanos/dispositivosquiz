import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';
import { LámparaPage } from '../lámpara/lámpara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocina = BocinaPage;
  tele = TvPage;
  smartphone = SmartphonePage;
  lampara = LámparaPage;


  constructor(public navCtrl: NavController) {

  }

  clickBocina(){
    this.navCtrl.push(this.bocina);
  }

  clickTV(){
    this.navCtrl.push(this.tele);
  }

  clicksmartphone(){
    this.navCtrl.push(this.smartphone);
  }

  clicklampara(){
    this.navCtrl.push(this.lampara);
  }

}
