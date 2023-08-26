import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-wyswietlanie-danych',
  templateUrl: './wyswietlanie-danych.component.html',
  styleUrls: ['./wyswietlanie-danych.component.scss']
})
  
export class WyswietlanieDanychComponent {

  dog = new Dog('Reksio', 13, new Date);
  pi:number=3.14232352323
  
  showDog() {
    return `Moj pies nazywa sie` + this.dog.name
  }
}

class Dog {
  constructor(public name: string, public age: number, public date:Date) {
  }
}
