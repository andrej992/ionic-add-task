import { Component } from '@angular/core';

import {AlertController, NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {StorageService} from './services/storage/storage.service';
import { LanguageService } from './services/language/language.service';

import { Globalization } from '@ionic-native/globalization/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'History',
            url: '/history',
            icon: 'list'
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: 'settings'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private alertController: AlertController,
        private navCtrl: NavController,
        private storageService: StorageService,
        public lngService: LanguageService,
        private globalization: Globalization

    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {

            this.statusBar.styleLightContent();
            this.splashScreen.hide();

            this.platform.backButton.subscribe(() => {
                console.log('exit app');
                navigator['app'].exitApp();
            });

            this.storageService.initLanguage();

            if(this.platform.is('cordova')){
                this.globalization.getPreferredLanguage().then((data) => {
                    let defaultLng: string = data.toString();
                    let parts = defaultLng.split("-");
                    this.lngService.set_default_language(parts[0]);
                });
            }
            else{
                this.lngService.set_default_language('en');
            }
        });
    }

    async logOut() {
        const alert = await this.alertController.create({
            header: (this.lngService.translate('Log Out')+'?'),
            message: this.lngService.translate('Are you sure that you want to log out?'),
            buttons: [
                {
                    text: this.lngService.translate('No'),
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                    }
                }, {
                    text: this.lngService.translate('Yes'),
                    handler: () => {

                        this.storageService.clearUser();
                        this.navCtrl.navigateRoot('/entry');

                    }
                }
            ]
        });

        await alert.present();
    }
}
