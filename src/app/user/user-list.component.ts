import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users$: Observable<User[]>;

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

}
