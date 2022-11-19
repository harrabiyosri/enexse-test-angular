import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId: any;
  user: User = new User();

  constructor(private userService: UserServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.userService.getUser(this.userId).subscribe(data => {
      this.user = data;
    },
      err => console.log(err)
    )
  }

  goToUsersList() {
    this.router.navigate(['agents']);
  }

  onSubmit() {
    this.userService.updateUser(this.userId, this.user).subscribe(data => {
      this.goToUsersList();
    },
      error => console.log(error)
    )
  }

}
