import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../../shared/services/user-store';
import { User } from '../../../shared/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile.service';
import { UserApiService } from '../../../shared/services/backend-api/user-api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public user: User;
  public editProfileForm: FormGroup;
  public newStudyForm: FormGroup;
  public formNewCollegeStudy = false;
  public nieTypes = [
    { uid: 0, name: 'Otro' },
    { uid: 1, name: 'NIF' },
    { uid: 2, name: 'Pasaporte' }
  ];
  public provinces = [
    { name: 'Cádiz' },
    { name: 'Barcelona' },
    { name: 'León' }
  ];
  public municipes = [
    { name: 'Chiclana de la Frontera' },
    { name: 'Sabadell' }
  ];
  private nameValidators = [
    Validators.minLength(3),
    Validators.maxLength(55),
    Validators.required,
    Validators.pattern('^[^\\s][\\s{1}a-zA-z]+[^\\s]$')
  ];
  private surnameValidators = [
    Validators.minLength(3),
    Validators.maxLength(55),
    Validators.required,
    Validators.pattern('^[^\\s][\\s{1}a-zA-z]+[^\\s]$')
  ];

  constructor(private activedRoute: ActivatedRoute,
              private userService: UserApiService,
              private userStore: UserStoreService,
              private fb: FormBuilder,
              private profileService: ProfileService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activedRoute.data.subscribe(((user: { user: User }) => {
      console.log(user);
      this.user = user.user;
    }));
    this.createForm();
  }

  private createForm() {
    this.editProfileForm = this.fb.group({
      id: [this.user.id],
      name: [this.user.name, this.nameValidators],
      surname: [this.user.surname, this.surnameValidators],
      birthdate: [this.user.birthdate],
      phone: [this.user.phone, [Validators.pattern('^\\d+$')]],
      phone2: [this.user.phone2, [Validators.pattern('^\\d+$')]],
      documentType: [this.user.documentType],
      // documentType: this.fb.group({
      //   uid: [this.user.documentType.uid, []],
      //   name: [this.user.documentType.name, []]
      // }),
      documentNumber: [this.user.documentNumber],
      address: this.fb.group({
        street: [this.user.address.street, [Validators.pattern('^.+$')]],
        province: [this.user.address.province, [Validators.pattern('^.+$')]],
        municipe: [this.user.address.municipe, [Validators.pattern('^.+$')]]
      }),
      province: [this.user.address.province.name],
      license: [this.user.license]

      //   province: this.fb.group({
      //     uid: [this.user.address.province.uid],
      //     name: [this.user.address.province.name, [Validators.pattern('^.+$')]]
      //   }),
      //   municipe: this.fb.group({
      //     uid: [this.user.address.municipe.uid],
      //     name: [this.user.address.municipe.name, [Validators.pattern('^.+$')]]
      //   }),
      //   // municipe: [this.user.address.municipe.name, [Validators.pattern('^.+$')]]
      // }),
      //   license: [this.user.license],
      //   aboutme: [this.user.aboutMe]
    });

    // this.editProfileForm.controls.documentType.valueChanges.subscribe(nieType => {
    //   this.editProfileForm.controls['documentType'].patchValue(nieType);
    // });

    this.newStudyForm = this.fb.group({
      level: [''],
      title: ['']
    });
  }

  public isInvalidByRequired(formControlName: string): boolean {
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

  public isString(formControlName: string) {
    const control = this.editProfileForm.get(formControlName);
    return control.dirty && (control.hasError('pattern'));
  }

  submitForm() {
    if (this.editProfileForm.valid) {
      const updatedProfile = {
        ...this.user,
        ...this.editProfileForm.value
      };

      console.log('Form:');
      console.log(this.editProfileForm.value);
      console.log('Updated:');
      console.log(updatedProfile);
      this.profileService.updateProfile(updatedProfile)
        .subscribe(data => {
          this.editProfileForm.patchValue(updatedProfile);
        });
      // this.router.navigate(['admin', 'profile', this.user.id]);
    }
  }

  formNewItem(study: string) {
    this.formNewCollegeStudy = true;
  }

  cancelNewStudy() {
    this.formNewCollegeStudy = false;
  }

  public documentTypeSelected(optOne, optTwo) {
    return optOne.uid === optTwo.uid;
  }
}
