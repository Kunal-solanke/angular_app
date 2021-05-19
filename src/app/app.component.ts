import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = true;

  say:any;
  title = 'SecondDemo';

  ngOnInit(){
    this.say=HiComponent;

  }

  sayHi(){
    this.say=HiComponent;
  }
  sayHello(){
    this.say=HelloComponent;
  }
}
