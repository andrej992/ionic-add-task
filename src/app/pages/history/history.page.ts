import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage/storage.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.page.html',
    styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

    tasks: any = [];

    constructor(
        private storage: StorageService
    ) { }

    ngOnInit() {
        this.storage.getTasks((tasks) => {
            this.tasks = tasks;
        })
    }

}
