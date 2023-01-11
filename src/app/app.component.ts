import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

coreCourse = COURSES[0];
RxJs = COURSES[1];
NgRx = COURSES[2];
cetvrto = COURSES[3];
kursevi=COURSES;

onAppViewed(kurs:Course){
  console.log("App element",kurs);
}


}
