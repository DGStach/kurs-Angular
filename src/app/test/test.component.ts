import { Component} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>my test1, </p>
  <app-test3></app-test3>`,
  styles: [`p{color:red}`]
})
export class TestComponent {

}
