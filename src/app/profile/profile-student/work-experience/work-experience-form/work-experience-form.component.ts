import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Experience} from '../../../../shared/models/experience.model';
import {dateValidator} from '../../../../shared/directives/date-validator.directive';

@Component({
    selector: 'app-work-experience-form',
    templateUrl: './work-experience-form.component.html',
    styleUrls: ['./work-experience-form.component.scss']
})
export class WorkExperienceFormComponent implements OnInit {

    public workForm: FormGroup;
    @Input() workExperience: Experience;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.loadFormInstance();
    }

    loadFormInstance() {
        this.workForm = this.fb.group({
            uid: [],
            company: [this.workExperience.company, [Validators.required]],
            position: [this.workExperience.position, [Validators.required]],
            date: [this.workExperience.date, [Validators.required, dateValidator()]]
        });
    }

    submit() {
        console.log(this.workForm.value);
    }
}
