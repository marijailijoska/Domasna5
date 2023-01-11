import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course, suzi} from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{

constructor(){ }

@Input()
title:string="";

@Input()
indeks:number=0;

@Input()
crs:Course = suzi;

@Output('suzi')
cuci=new EventEmitter<Course>();

ngOnInit(): void{

}

onCrsViewed(){
  console.log("bla bla bla");
  this.cuci.emit(this.crs)
}

klasi(){
  if(this.crs.category=='BEGINNER') {return 'begin'}
}
stilovi(){
  if(this.crs.category=='BEGINNER') { return {
    'background-image':'url('+this.crs.iconUrl+')' }
  }
}
}
