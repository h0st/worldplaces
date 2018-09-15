import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-company',
  templateUrl: 'company.html'
})
export class CompanyPage {
  icons: string[];
  companies: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['Company1', 'Company2', 'Company3', 'Company4', 'Company5'];

    //this.icons = [];
    this.companies = [];
    for(let i = 1; i < this.icons.length; i++) {
      this.companies.push({
        title: 'Company ' + i,
        note: 'Company #' + i + ' information ...',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(PlacesPage, { item: item });
  }
}
