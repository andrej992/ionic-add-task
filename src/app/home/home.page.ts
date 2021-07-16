import { Component } from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private usersService: UsersService) {

        this.usersService.getUsers().subscribe((data) => {
            console.log(data);
        });
    }

}
