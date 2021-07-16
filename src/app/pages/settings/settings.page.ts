import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { Storage } from '@ionic/storage';
import { StorageService } from 'src/app/services/storage/storage.service';
import {ThemeService} from '../../services/theme/theme.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {



    constructor(
        public lngService: LanguageService,
        private storage: Storage,
        private storageService: StorageService,
        private themeService: ThemeService
    ) {
    }

    ngOnInit() {
    }

    save() {
        console.log(this.lngService.language);

        this.storageService.storeLanguage(this.lngService.language);
        this.lngService.set_language();
    }

    toggleDarkMode() {
        this.themeService.toggleAppTheme();
    }

}
