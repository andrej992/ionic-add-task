import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { LanguageService } from '../language/language.service';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage, public lngService: LanguageService) { }

    storeLanguage(lng){
        this.storage.set('language',lng);
    }

    initLanguage(){
        this.storage.get("language").then((val)=>{
            if(val){
                this.lngService.language = val;
                this.lngService.set_language();
            }
            
        })
    }

    storeUser(user, callback){
        this.storage.get('myClass.users').then((data) => {

            let found = false;

            if(data){
                data.forEach((value) => {
                    if(value.email == user.email){
                        found = true;
                        return;
                    }
                });
            }

            if(!found){
                data && data.length ? data.push(user) : data = [user];
                this.storage.set('myClass.users', data);
                this.storage.set('myClass.userData', user);
                callback(true);
            }

            callback(false);
        });
    }

    checkUser(user, callback){
        this.storage.get('myClass.users').then((data) => {

            if(data){
                data.forEach((value) => {
                    if(value.email == user.email && value.password == user.password){
                        this.storage.set('myClass.userData', value);
                        callback(true);
                        return;
                    }
                });
            }

            return callback(false);

        });
    }

    getUser(callback){
        return this.storage.get('myClass.userData').then((user) => {
            callback(user)
        });
    }

    clearUser(){
        return this.storage.set('myClass.userData', null);
    }

    getNextId(callback){
        this.storage.get('myClass.tasks').then((data: any) => {
            if(data && data.length){
                let lastId = data[data.length - 1].id;
                callback(Number(lastId) + 1);
            }
            else{
                callback(1);
            }
        });
    }

    storeNewTask(task, callback){
        this.storage.get('myClass.tasks').then((data: any) => {
            data && data.length ? data.push(task) : data = [task];
            this.storage.set('myClass.tasks', data);

            callback(true);
        });
    }

    getTasks(callback){
        this.storage.get('myClass.tasks').then((data) => {
            callback(data);
        });
    }

    updateTask(task){

        this.storage.get('myClass.tasks').then((data: any) => {

            for(let i = 0; i < data.length; i++){
                if(data[i].id == task.id){
                    data[i] = task;
                }
            }

            this.storage.set('myClass.tasks', data);

        });

    }

    deleteTask(id){
        this.storage.get('myClass.tasks').then((data: any) => {

            data = data.filter((el) => {
                return id !== el.id;
            });

            this.storage.set('myClass.tasks', data);

        });
    }

}
