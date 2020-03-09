import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../../shared/services/user-store';
import { User } from '../../../shared/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile.service';
import { UserApiService } from '../../../shared/services/backend-api/user-api.service';
import { CollegeStudy, VocationalStudy } from '../../../shared/models/study.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public user: User;
  public editProfileForm: FormGroup;
  public showEditCollegeStudyForm = false;
  public editCollegeStudyForm: FormGroup = null;
  public newVocationalStudyForm: FormGroup = null;
  public newCollegeStudyForm: FormGroup = null;
  public showEditVocationalStudyForm = false;
  public editVocationalStudyForm: FormGroup = null;
  public nieTypes = [
    { uid: 0, name: 'Otro' },
    { uid: 1, name: 'NIF' },
    { uid: 2, name: 'Pasaporte' }
  ];
  public provinces = [
    { uid: 4, name: 'Cádiz' },
    { uid: 1, name: 'Barcelona' },
    { uid: 2, name: 'León' }
  ];
  public municipes = [
    { uid: 1, name: 'Sabadell' },
    { uid: 6, name: 'Chiclana de la Frontera' }
  ];
  public levels = [
    { uid: 1, name: 'Ciclo Formativo' },
    { uid: 2, name: 'Título universitario' },
    { uid: 3, name: 'Otro título' }
  ];
  public allInstitutions = [
    { uid: 1, name: 'Centro Laboral de Tarragona' },
    { uid: 2, name: 'IES Politécnico Jesús Marin' }
  ];
  public allCategories = [
    { uid: 1, name: 'Física y Química' },
    { uid: 2, name: 'Informática y comunicaciones' }
  ];
  public allGrades = [
    { uid: 1, name: 'Ciclo Formativo Grado Medio' },
    { uid: 3, name: 'Ciclo Formativo Grado Superior' }
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
  private showNewVocationalStudyForm = false;
  private showNewCollegeStudyForm = false;

  constructor(private activedRoute: ActivatedRoute,
              private userService: UserApiService,
              private userStore: UserStoreService,
              private fb: FormBuilder,
              private profileService: ProfileService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activedRoute.data.subscribe(((user: { user: User }) => {
      this.user = user.user;
    }));
    this.createEditUserForm();
  }

  // Validators
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

  // Forms creation
  private createEditUserForm() {
    this.editProfileForm = this.fb.group({
      id: [this.user.id],
      name: [this.user.name, this.nameValidators],
      surname: [this.user.surname, this.surnameValidators],
      birthdate: [this.user.birthdate],
      phone: [this.user.phone, [Validators.pattern('^\\d+$')]],
      phone2: [this.user.phone2, [Validators.pattern('^\\d+$')]],
      documentType: [this.user.documentType],
      documentNumber: [this.user.documentNumber],
      address: this.fb.group({
        street: [this.user.address.street, [Validators.pattern('^.+$')]],
        province: [this.user.address.province, [Validators.pattern('^.+$')]],
        municipe: [this.user.address.municipe, [Validators.pattern('^.+$')]]
      }),
      license: [this.user.license],
      aboutMe: [this.user.aboutMe],
      otherCompetencies: [this.user.otherCompetences]
    });
  }

  private createEditCollegeStudyForm(study: CollegeStudy) {
    this.showEditCollegeStudyForm = true;
    this.editCollegeStudyForm = this.fb.group({
      uid: [study.uid],
      level: [study.level],
      title: [study.title],
      certificate: [study.certificate],
      date: [study.date],
      bilingue: [study.bilingue],
      institution: [study.institution]
    });
  }

  private createEditVocationalStudyForm(study: VocationalStudy) {
    this.showEditVocationalStudyForm = true;
    this.editVocationalStudyForm = this.fb.group({
      uid: [study.uid],
      level: [study.level],
      institution: [study.institution],
      title: [study.title],
      category: [study.category],
      grade: [study.grade],
      date: [study.date],
      dual: [study.dual],
      bilingue: [study.bilingue],
      certificate: [study.certificate]
    });
  }

  private createNewVocationalForm() {
    this.newVocationalStudyForm = this.fb.group({
      uid: [this.newStudyId()],
      level: [],
      institution: [],
      title: [],
      category: [],
      grade: [],
      date: [],
      dual: [],
      bilingue: [false],
      certificate: [false]
    });
  }

  private createNewCollegeForm() {
    this.newCollegeStudyForm = this.fb.group({
      uid: [this.newStudyId()],
      level: [],
      title: [],
      certificate: [],
      date: [],
      bilingue: [],
      institution: []
    });
  }

  // Submit forms
  public submitEditUser() {
    if (this.editProfileForm.valid) {
      const updatedProfile = {
        ...this.user,
        ...this.editProfileForm.value
      };
      this.profileService.updateProfile(updatedProfile)
        .subscribe(data => {
          this.editProfileForm.patchValue(updatedProfile);
        });
      this.router.navigate(['admin', 'profile', this.user.id]);
    }
  }

  public showVocationalForm() {
    this.showNewVocationalStudyForm = true;
    this.createNewVocationalForm();
  }

  public submitEditCollege() {
    if (this.editCollegeStudyForm.valid) {
      this.showEditCollegeStudyForm = false;
      this.userService.updateUserStudy(this.user, this.editCollegeStudyForm.value);
    }
  }

  public submitEditVocational() {
    if (this.editVocationalStudyForm.valid) {
      this.showEditVocationalStudyForm = false;
      this.userService.updateUserStudy(this.user, this.editVocationalStudyForm.value);
    }
  }

  public submitNewVocationalStudy() {
    if (this.newVocationalStudyForm.valid) {
      this.showNewVocationalStudyForm = false;
      this.user.studies.push(this.newVocationalStudyForm.value);
      this.userService.updateUser(this.user);
    }
  }

  public submitNewCollegeStudy() {
    if (this.newCollegeStudyForm.valid) {
      this.showNewCollegeStudyForm = false;
      this.user.studies.push(this.newCollegeStudyForm.value);
      this.userService.updateUser(this.user);
    }
  }

  // Helper methods
  public cancelNewStudy() {
    this.showNewVocationalStudyForm = false;
    this.showNewCollegeStudyForm = false;
  }

  public sameUuid(optOne, optTwo) {
    return optOne.uid === optTwo.uid;
  }

  public removeStudy(uid: number) {
    this.userService.removeStudyFromUser(this.user, uid)
      .subscribe(data => {
      });
  }

  public editStudy(study) {

    if (study.level.uid === 2) {
      this.createEditCollegeStudyForm(study);
    } else if (study.level.uid === 1) {
      this.createEditVocationalStudyForm(study);
    }
  }

  public showCollegeForm() {
    this.showNewCollegeStudyForm = true;
    this.createNewCollegeForm();
  }

  private newStudyId(): number {
    const lastStudy = this.user.studies[this.user.studies.length - 1];

    return lastStudy.uid + 1;
  }
}
