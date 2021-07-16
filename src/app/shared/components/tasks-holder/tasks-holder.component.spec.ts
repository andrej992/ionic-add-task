import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasksHolderComponent } from './tasks-holder.component';

describe('TasksHolderComponent', () => {
  let component: TasksHolderComponent;
  let fixture: ComponentFixture<TasksHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksHolderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
