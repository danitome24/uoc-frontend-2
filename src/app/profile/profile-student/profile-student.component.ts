import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../shared/services/profile.service';
import {User} from 'src/app/shared/models/user.model';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../../auth/reducers/auth.reducer';
import * as fromUserActions from '../../auth/actions/auth.actions';
import {Observable, from} from 'rxjs';
import {SigninService} from '../../auth/signin/signin.service';
import {UserDatasource} from '../datasource/user-datasource';

@Component({
    selector: 'app-profile-student',
    templateUrl: './profile-student.component.html',
    styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {

    public user$: Observable<User>;
    public datasource: UserDatasource;
    displayedColumns: string[] = ['type', 'level', 'title', 'center', 'date', 'cert', 'bilingue', 'dual', 'actions'];

    constructor(private profileService: ProfileService, private store: Store, private signinService: SigninService) {
        // this.user = this.profileService.user;
        this.user$ = this.store.pipe(
            select(fromUser.selectShowUserProfile)
        );
    }

    ngOnInit() {
        this.datasource = new UserDatasource(this.store);
        this.datasource.loadStudies();
    }

    deleteStudy(studyID: number) {
        this.store.dispatch(fromUserActions.actions.deleteStudy({studyId: studyID}));
    }

    deleteLanguage(languageID: any) {
        this.store.dispatch(fromUserActions.actions.deleteLanguage({languageId: languageID}));
    }

    deleteExperience(uid: number) {
        this.store.dispatch(fromUserActions.actions.deleteExperience({experienceId: uid}));
    }
}
