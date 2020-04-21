import { UserService } from './../service/user.service';
import { User } from './user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[]
  findLogin: string
  NotFound = false
  aSub$: Subscription

  constructor(private userService: UserService,
  ) { }

  ngOnInit() {

    this.aSub$ = this.userService.getAllUser().subscribe((data: User[]) => {
      this.users = data
    })


  }

  fingUserByLogin() {
    this.aSub$ = this.userService.getUserByLogin(this.findLogin).subscribe(
      res => {
        if (res.length !== 0) {
          this.users = []
          this.NotFound = false
          const candidate = {
            login: res.login,
            avatar_url: res.avatar_url
          }
          this.users.push(candidate)
        }
      },
      err => { 
        this.users = []
        this.NotFound = true
       },
      () => { 
        
      }
    )
  }

}
