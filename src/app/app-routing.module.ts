import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {StorageService} from './services/storage/storage.service';
import {NavController} from '@ionic/angular';

const routes: Routes = [
    {
        path: 'entry',
        loadChildren: () => import('./pages/entry/entry.module').then( m => m.EntryPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
    },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'new-task',
    loadChildren: () => import('./pages/new-task/new-task.module').then( m => m.NewTaskPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(
        private storageService: StorageService,
        private navCtrl: NavController
    ){
        this.storageService.getUser((data) => {
            let route = data && data.email ? '/home' : '/entry';
            this.navCtrl.navigateRoot(route)
        });
    }
}
