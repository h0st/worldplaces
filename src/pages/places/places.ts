import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { PlaceDetailsPage } from '../place-details/place-details';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {
  icons: string[];
  places: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['Налычево', 'Мутновский', 'Козельский', 'Авачинский', 'Толбачик' ];

    //this.icons = [];
    this.places = [];
    for(let i = 1; i < this.icons.length; i++) {
      this.places.push({
        title: 'Place ' + i,
        note: 'Place #' + i + ' information ...',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(PlaceDetailsPage, { item: item });
  }
}
