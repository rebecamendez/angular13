import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular13';

  constructor() {
    this.sayHello();
  }

  public sayHello() {
    console.log(`Hello ${this.title}`);
  }

  public sayGoodbye() {
    console.log(`Hello ${this.title}`);
  }
}
