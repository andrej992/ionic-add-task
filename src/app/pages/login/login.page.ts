import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../../services/storage/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    error_message = {
        email:[
            {type:"required",message:"Please enter email"},
            {type:"email",message:"Incorrect email"}
        ],
        password:[
            {type:"required",message:"Please enter  password"},
            {type:"minlength",message: "The length of the password should be at least 6 character long"}
        ]
    };

    buttonClicked = false;

    registerForm: FormGroup;

    user: any = {};

    constructor(
        private storageService: StorageService,
        private navCtrl: NavController
    ) {
        this.registerForm= new FormGroup({
            email: new  FormControl('',Validators.compose([Validators.required,Validators.email])),
            password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)]))
        });
    }

    ngOnInit() {

    }

    logIn(){
        this.buttonClicked = true;

        if(this.registerForm.status == "VALID"){
            let input = {
                email: this.registerForm.value.email,
                password: this.registerForm.value.password
            };

            this.storageService.checkUser(input, (state) => {
                if(state){
                    this.navCtrl.navigateRoot('/home');
                }
                else{
                    // display invalid credentials
                }
            });
        }
    }
}
