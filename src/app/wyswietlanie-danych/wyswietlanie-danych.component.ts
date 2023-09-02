import { Component, Output, EventEmitter } from '@angular/core';
@Component({
selector: 'app-wyswietlanie-danych',
templateUrl: './wyswietlanie-danych.component.html',
styleUrls: ['./wyswietlanie-danych.component.scss']
})

export class WyswietlanieDanychComponent {

    @Output() dogdata = new EventEmitter<number>();

    pass(dogAge:number) {
        this.dogdata.emit(dogAge)
    }
    
dog = new Dog('Reksio', 13, new Date);
pi?:number

showDog() {
return `Moj pies nazywa sie` + this.dog.name
}
}

class Dog {
constructor(public name: string, public age: number, public date:Date) {
}
}
