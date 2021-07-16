import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.page.html',
    styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {

    constructor(
        private menuCtrl: MenuController,
        private navCtrl: NavController
    ) {
        this.menuCtrl.enable(false);
    }

    ngOnInit() {


    }

    goToPage(page){
        this.navCtrl.navigateForward(page);
    }

}
