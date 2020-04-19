import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Language} from '../../../shared/models/language.model';
import * as fromUserReducer from '../../../auth/reducers/auth.reducer';
import * as fromUser from '../../../auth/actions/auth.actions';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-profile-language',
    templateUrl: './profile-language.component.html',
    styleUrls: ['./profile-language.component.scss']
})
export class ProfileLanguageComponent implements OnInit {
    language: Language = {} as Language;
    public selectedLanguage$: Observable<Language>;
    public nextLangUid$: Observable<number>;
    public nextLangUid: number;

    constructor(
        private route: ActivatedRoute,
        private store: Store,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.nextLangUid$ = this.store.pipe(
            select(fromUserReducer.selectNextUidLanguage),
        );
        this.nextLangUid$.subscribe(nextUid => {
            this.nextLangUid = nextUid;
        });
    }

    public saveOrUpdate(language: Language) {
        this.isNew() ? this.save(language) : this.update(language);
    }

    private isNew(): boolean {
        return !!!this.language.uid;
    }

    private save(language: Language) {
        const newLang = {
            ...language,
            uid: this.nextLangUid,
        };
        console.log(newLang);
        this.store.dispatch(fromUser.actions.addLanguage({language: newLang}));
        this.router.navigate(['/admin/profile']);
    }

    private update(language: Language) {
        console.log('TODO update');
        /*const user = this.profileService.user;
        const languages = user.languages;
        const foundIndex = languages.findIndex(
            _language => _language.uid === language.uid
        );
        languages[foundIndex] = language;
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);*/
    }
}
