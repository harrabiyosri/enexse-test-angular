import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    })
  }

  status(active: any) {
    return active;
  }

  updateUser(id: any) {
    this.router.navigate(['agents', id]);
  }

  deleteUser(id: any) {
    this.userService.deleteEmploye(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }

  detailsUser(id: any) {
    this.router.navigate(['agent-details', id]);
  }

}
