import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  name = '';
  btnDisable = false;
  activeBtn(event:any) {
    this.btnDisable = !this.btnDisable
console.log(event.target.value)
  }
}
