import { Component } from '@angular/core';

@Component({
  selector: 'app-dyrektywy',
  templateUrl: './dyrektywy.component.html',
})
export class DyrektywyComponent {

  days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  
  dogs = new Array<Dog>();
  constructor() {
    this.dogs.push(new Dog('Reksio', 3), new Dog("Latek", 5))
  }
  
  removeDays = () => {
    this.days.length = 0;
  }

  addDays = () => {
    this.days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  }
}
class Dog{
  constructor(public name:string, public age:number) {
}
}