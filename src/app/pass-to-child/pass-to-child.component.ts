import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pass-to-child',
  templateUrl: './pass-to-child.component.html',
  styleUrls: ['./pass-to-child.component.scss']
})
export class PassToChildComponent implements OnInit {
@Input()
tasks = ["ZADANIE1", "ZADANIE 2"]
  
  @Output()
  eventTask = new EventEmitter<string>();
  
  select(task: any) {
/*     console.log(task);
 */    this.eventTask.emit(task);
}
  
ngOnInit() {
}
}
