import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: any;
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    this.user = new User();
    this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
    })
  }

}
