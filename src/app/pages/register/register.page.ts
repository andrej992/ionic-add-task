import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../../services/storage/storage.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    error_message = {
        name: [
            {type: 'required', message: 'The name is required'},
            {type: 'pattern', message: 'Please enter correct name'},
            {type: 'maxlength', message: 'The length of the name should be at most twenty characters long'}
        ],
        email: [
            {type: 'required', message: 'Please enter email'},
            {type: 'email', message: 'Incorrect email'}
        ],
        password: [
            {type: 'required', message: 'Please enter  password'},
            {type: 'minlength', message: 'The length of the password should be at least 6 character long'}
        ],
        confirm_password: [
            {type: 'required', message: 'Please enter  password'},
            {type: 'match', message: 'The passwords do not match.'},
            {type: 'minlength', message: 'The length of the password should be at least 6 character long'}
        ],
        type: [
            {type: 'required', message: 'The type is required'}
        ]
    };

    registerForm: FormGroup;

    buttonClicked = false;


    user: any = {};

    registerForm1: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private navCtrl: NavController
    ) {
        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.maxLength(20),
                    Validators.pattern("([a-z]*[A-Z]*)*")
                ]
            )),
            email: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.email
                ])),
            password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            confirm_password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            type: new FormControl('1', Validators.compose([Validators.required]))

        },{
            validators:[this.passwordMatch('password','confirm_password')]
        });

        this.registerForm1 =  this.formBuilder.group({
            name:['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("([a-z]*[A-Z]*)*")])],
            email:['', Validators.compose([Validators.required, Validators.email])],
            password1:['', Validators.compose([Validators.required, Validators.minLength(6)])],
            confirm_password2: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            type:['1', Validators.compose([Validators.required])]
        },{
            validator: this.passwordMatch('password1','confirm_password2')
        })
    }

    ngOnInit() {
    }

    register() {
        this.buttonClicked = true;

        if(this.registerForm.status == "VALID"){
            let input = {
                name: this.registerForm.value.name,
                email: this.registerForm.value.email,
                password: this.registerForm.value.password,
                type: this.registerForm.value.type,
            };

            this.storageService.storeUser(input, (state) => {
                if(state){
                    this.navCtrl.navigateRoot('/home');
                }
                else{
                    // display invalid credentials
                }
            });
        }

    }

    passwordMatch(key_password, key_confirm_password){
        return (group:FormGroup) => {
            let password = group.controls[key_password].value;
            let password_confirm = group.controls[key_confirm_password].value;

            if(password !== password_confirm)
                return {
                    match:true
                }
        }
    }

}
