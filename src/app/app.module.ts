import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Globalization } from '@ionic-native/globalization/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {ThemeService} from './services/theme/theme.service';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (LanguageLoader),
            deps: [HttpClient]
        }
        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        Globalization,
        Camera
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private themeService: ThemeService
    ) {}
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit(){
        this.themeService.toggleAppTheme();
    }
}
