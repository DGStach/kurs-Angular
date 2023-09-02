import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Kurs';
  activityList = ["ZADANIE1", "ZADANIE 2"];
  select(task: string): void{
    console.log("to jest przekazany task z childa do parenta przy pomocy przycisku SELECT", task)
  }

}
