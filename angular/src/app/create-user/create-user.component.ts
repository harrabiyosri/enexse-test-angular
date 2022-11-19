import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  chekbox1: any
  chekbox2: any;
  checkbox3: any;

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    const checkbox1 = document.getElementById(
      'USER',
    ) as HTMLInputElement | null;
    const checkbox2 = document.getElementById(
      'ADMIN',
    ) as HTMLInputElement | null;
    const checkbox3 = document.getElementById(
      'MODERATOR',
    ) as HTMLInputElement | null;
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUsersList()
    },
      err => console.log(err),
    )
  }

  goToUsersList() {
    this.router.navigate(['agents']);
  }

  onSubmit() {
    this.saveUser();
  }

}
