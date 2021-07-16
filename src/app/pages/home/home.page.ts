import { Component, OnInit } from '@angular/core';
import {Events, MenuController, NavController} from '@ionic/angular';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    user: any = {};
    tasks: any = [];

    constructor(
        private storageService: StorageService,
        private menuCtrl: MenuController,
        private navCtrl: NavController,
        private events: Events
    ) {
        this.storageService.getUser((data) => {
            if(data && data.email){
                this.user = data;
            }
        });

        this.menuCtrl.enable(true);

        this.events.subscribe('taskEdited', (task) => {
            console.log(task);
        })
    }

    ngOnInit() {
        this.storageService.getTasks((tasks) => {
            this.tasks = tasks;
        });
    }

    openNewTaskPage(){
        this.navCtrl.navigateForward('/new-task');
    }

}
