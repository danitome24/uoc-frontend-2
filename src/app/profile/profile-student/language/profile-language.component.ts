import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Language} from '../../../shared/models/language.model';
import * as fromUser from '../../../auth/actions/auth.actions';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-profile-language',
    templateUrl: './profile-language.component.html',
    styleUrls: ['./profile-language.component.scss']
})
export class ProfileLanguageComponent {
    language: Language = {} as Language;


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

    private saveOrUpdate(language: Language) {
        this.isNew() ? this.save(language) : this.update(language);
    }

    private isNew(): boolean {
        return !!!this.language.uid;
    }

    private save(language: Language) {
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
