import {Component, OnInit} from '@angular/core';
import {Experience} from '../../../shared/models/experience.model';
import {Store} from '@ngrx/store';
import * as fromUser from '../../../auth/actions/auth.actions';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

    public experience: Experience = {} as Experience;
    private nextWorkExperience: number;

    constructor(private store: Store) {
        this.nextWorkExperience = 2;
    }

    ngOnInit(): void {
    }

    addOrUpdateExperience(experience: Experience) {
        experience.uid ? this.update(experience) : this.save(experience);
    }

    private update(experience: Experience) {
    }

    private save(experience: Experience) {
        const newWorkExperience = {
            ...experience,
            uid: this.nextWorkExperience,
        };
        this.store.dispatch(fromUser.actions.addWorkExperience({experience: newWorkExperience}));
    }
}
