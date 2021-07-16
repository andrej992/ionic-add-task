import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksHolderComponent} from './tasks-holder/tasks-holder.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [
        TasksHolderComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        TasksHolderComponent
    ]
})
export class ComponentsModule { }
