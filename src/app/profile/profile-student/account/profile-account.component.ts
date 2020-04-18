import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/shared/models/user.model';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromProfile from '../../reducers/profile.reducer';
import * as fromProfileActions from '../../actions/profile.actions';

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

    private loadUserProfile() {
        this.user$ = this.store.pipe(
            select(fromProfile.selectShowUserProfile)
        );
    }

    updateUser($event: User) {
        console.log($event);
        this.store.dispatch(fromProfileActions.actions.updateUserProfile({user: $event}));
    }
}
