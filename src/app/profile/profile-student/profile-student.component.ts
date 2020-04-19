import {Component} from '@angular/core';
import {ProfileService} from '../../shared/services/profile.service';
import {User} from 'src/app/shared/models/user.model';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../../auth/reducers/auth.reducer';
import * as fromUserActions from '../../auth/actions/auth.actions';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-profile-student',
    templateUrl: './profile-student.component.html',
    styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
    // user: User;
    public user$: Observable<User>;

    constructor(private profileService: ProfileService, private store: Store) {
        // this.user = this.profileService.user;
        this.user$ = this.store.pipe(
            select(fromUser.selectShowUserProfile)
        );
    }

    deleteStudy(studyID: number) {
        this.store.dispatch(fromUserActions.actions.deleteStudy({studyId: studyID}));
    }

    deleteLanguage(languageID: any) {
        //const languages = this.user.languages;
        //const index = languages.findIndex(language => language.uid === languageID);
        /*if (index === -1) {
          alert('Error: Language not found');
          return;
        }
        languages.splice(index, 1);*/
        //this.profileService.updateProfile(this.user);
    }
}
