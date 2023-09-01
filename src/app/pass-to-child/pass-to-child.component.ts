import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass-to-child',
  templateUrl: './pass-to-child.component.html',
  styleUrls: ['./pass-to-child.component.scss']
})
export class PassToChildComponent implements OnInit {
@Input()
tasks = ["ZADANIE1", "ZADANIE 2"]

  
  constructor() {}

ngOnInit() {
}

}
