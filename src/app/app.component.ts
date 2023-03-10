import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'taylorApp';
  users: Object

  constructor(private userService : UserService){

  }

  ngOnInit() {
    console.log('oninit.......')
    this.userService.getUsers().subscribe((datas)=>{
      this.users = datas;
      console.log('this.users : ', this.users)
    })
  }
}
