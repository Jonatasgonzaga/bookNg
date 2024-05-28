import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.scss']
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.

  isClicked = false;
  msg = 'You clicked the second button';


  message = 'Oi, mundo!';

  fontColor = 'brown';
  sayHelloId = 1;
  canClick = true;
  buttonId = 2;

  sayMessage() {
    alert(this.message);
    this.canClick = false;
  }

  onClick(){
    this.isClicked = !this.isClicked;
    alert(this.msg);
  }

  classState(){
    if(this.isClicked){
        return 'clicked';
    }
    else{
        return 'notClicked';
    }
  }

}