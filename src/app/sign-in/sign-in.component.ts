import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Input('loggedIn') loginFlag = true;
  public name = "Rakhat";

  constructor() { }

  ngOnInit(): void {
  }
}
