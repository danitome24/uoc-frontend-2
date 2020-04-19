import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Language} from '../../../shared/models/language.model';
import * as fromUserReducer from '../../../auth/reducers/auth.reducer';
import * as fromUser from '../../../auth/actions/auth.actions';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MockData} from '../../../shared/mock-data';

@Component({
    selector: 'app-profile-language',
    templateUrl: './profile-language.component.html',
    styleUrls: ['./profile-language.component.scss']
})
export class ProfileLanguageComponent implements OnInit {
    language: Language = {} as Language;
    public selectedLanguage$: Observable<Language>;
    public allLanguagesFromUser$: Observable<Language[]>;

    constructor(
        private route: ActivatedRoute,
        private store: Store,
        private router: Router
    ) {
        this.route.params.subscribe(params => {
            /*const user = this.profileService.user;
            const uid = +params.uid;
            this.language = (user.languages.find(language => language.uid === uid) ||
              {}) as Language;*/
        });
    }

    ngOnInit(): void {
        /*this.allLanguagesFromUser$ = this.store.pipe(
            select(fromUserReducer.selectAllLanguages)
        );
        this.allLanguagesFromUser$.subscribe(allLanguages => {
            const newLang = MockData.fakeIncreaseID<Language>(
                allLanguages,
                language
            );

        });*/
    }

    public saveOrUpdate(language: Language) {
        this.isNew() ? this.save(language) : this.update(language);
    }

    private isNew(): boolean {
        return !!!this.language.uid;
    }

    private save(language: Language) {
        /*const newLang = MockData.fakeIncreaseIdObservable<Language>(
            this.allLanguagesFromUser$,
            language
        );*/
        this.store.dispatch(fromUser.actions.addLanguage({language}));
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
