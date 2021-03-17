import { Component } from '@angular/core';
import { RanobeComponent } from './ranobe/ranobe.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shikimori';

  image = '';

  icon1 = 'assets/images/message.png';
  icon2 = 'assets/images/achive.jpg';
  icon3 = 'assets/images/chat.jpg';

  public name = "Rakhat";
  userLoggedIn = false;  
}
