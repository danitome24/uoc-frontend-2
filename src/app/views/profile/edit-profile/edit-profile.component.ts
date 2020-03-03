import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../../shared/services/user-store';
import { User } from '../../../shared/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public user: User;
  public editProfileForm: FormGroup;
  nieTypes = [
    { id: 0, name: 'Otro' },
    { id: 1, name: 'NIF/NIE' },
    { id: 2, name: 'Pasaporte'}
  ];

  constructor(private activedRoute: ActivatedRoute, private userStore: UserStoreService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activedRoute.data.subscribe(((user: { user: User }) => {
      this.user = user.user;
    }));
    this.createForm();
  }

  private createForm() {
    this.editProfileForm = this.fb.group({
      name: [this.user.name, [Validators.minLength(3), Validators.maxLength(55), Validators.required, Validators.pattern('^[^\\s][\\s{1}a-zA-z]+[^\\s]$')]],
      surname: [this.user.surname, [Validators.minLength(3), Validators.maxLength(55), Validators.required, Validators.pattern('^[^\\s][\\s{1}a-zA-z]+[^\\s]$')]],
      birthdate: [this.user.birthdate],
      phone: [this.user.phone, [Validators.pattern('^\\d+$')]],
      phone2: [this.user.phone2, [Validators.pattern('^\\d+$')]],
      nieType: [this.user.documentType.uid],
      documentNumber: [this.user.documentNumber],
      address: [this.user.address.street],
      province: [this.user.address.province.name],
      license: [this.user.license]
    });
  }

  public isInvalidByRequired(formControlName: string) {
    const control = this.editProfileForm.get(formControlName);
    return control.dirty && control.hasError('required');
  }

  public hasGoodLength(formControlName: string) {
    const control = this.editProfileForm.get(formControlName);
    return control.dirty && (control.hasError('minlength') || control.hasError('maxlength'));
  }

  public hasNoSpecialChars(formControlName: string) {
    const control = this.editProfileForm.get(formControlName);
    return control.dirty && (control.hasError('pattern'));
  }

  public onlyNumbers(formControlName: string) {
    const control = this.editProfileForm.get(formControlName);
    return control.dirty && (control.hasError('pattern'));
  }
}
