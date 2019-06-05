import { Component, OnInit } from '@angular/core';
import { User } from '../../_Models/user';
import { UsersService } from '../../services/users.service';
import { AlertifyService } from '../../services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UsersService, private alertify: AlertifyService,
  private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //        }, error => {
  //          this.alertify.error(error);
  //        });
  // }
}
