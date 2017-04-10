import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'My first angular2-google-maps project';
  latitud: number = -3.75934;
  longitud: number = -75.09007;

  constructor(public navCtrl: NavController) {

  }

}
