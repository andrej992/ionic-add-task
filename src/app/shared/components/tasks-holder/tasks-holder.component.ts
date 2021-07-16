import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../../../services/storage/storage.service';
import {Events, NavController} from '@ionic/angular';
import {NavigationOptions} from '@ionic/angular/dist/providers/nav-controller';
import {NavigationExtras} from '@angular/router';

@Component({
    selector: 'app-tasks-holder',
    templateUrl: './tasks-holder.component.html',
    styleUrls: ['./tasks-holder.component.scss'],
})
export class TasksHolderComponent implements OnInit {

    user: any = {};

    @Input() tasks: any = [];
    @Input() isHistory: boolean = false;

    constructor(
        private storageService: StorageService,
        private navCtrl: NavController,
        private events: Events
    ) {

        this.storageService.getUser((data) => {
            if(data && data.email){
                this.user = data;
            }
        });

        this.events.subscribe('taskStored', (task) => {
            this.tasks.push(task);
        });

    }

    ngOnInit() {
        let today = "2019-12-23";

        this.tasks = this.tasks.filter( (task: any) => {
            return this.isHistory ? task.date < today : task.date >= today;
        });
    }

    editTask(task){

        let navigationExtras: NavigationExtras = {
            queryParams: {
                task: task
            }
        };

        this.navCtrl.navigateForward('/new-task', navigationExtras);

    }

}
