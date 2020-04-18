import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/shared/models/user.model';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromProfile from '../../reducers/profile.reducer';

@Component({
    selector: 'app-profile-account',
    templateUrl: './profile-account.component.html',
    styleUrls: ['./profile-account.component.scss']
})
export class ProfileAccountComponent implements OnInit {
    public user$: Observable<User>;

    constructor(private router: Router, private store: Store) {
    }

    ngOnInit() {
        this.loadUserProfile();
    }


    public save() {
        /*const user = { ...this.profileService.user, ...this.rForm.value };
        this.profileService.user = user;
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);*/
    }

    private loadUserProfile() {
        this.user$ = this.store.pipe(
            select(fromProfile.selectShowUserProfile)
        );
    }
}
