import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  taskList:(string)[] = [];
  task: string = ""
  complitedTask:(string)[] = []

  add() {
    this.taskList.push(this.task);
    this.task = "";
  }
  remove(job: string) {
    this.taskList = this.taskList.filter(e => e !== job);
  }

  complite(job:string) {
    this.complitedTask.push(job);
    console.log(job);
    this.remove(job);
/*     this.remove(job);
 */  }
}
