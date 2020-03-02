import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserApiService } from '../../shared/services/backend-api/user-api.service';
import { UserStoreService } from '../../shared/services/user-store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(private userApi: UserApiService, private userStore: UserStoreService) {
  }

  ngOnInit(): void {
    this.userApi.getUserById(+this.userStore.token).subscribe(user => {
      this.user = user;
    });
  }

}
