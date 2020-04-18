import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileStudyComponent } from './profile-student/study/profile-study.component';
import { VocationalFormComponent } from './profile-student/study/vocational-form/vocational-form.component';
import { UniversityDegreeComponent } from './profile-student/study/university-degree-form/university-degree-form.component';
import { ProfileLanguageComponent } from './profile-student/language/profile-language.component';
import { ProfileAccountComponent } from './profile-student/account/profile-account.component';
import { ProfileAccountFormComponent } from './profile-student/account/profile-account-form/profile-account-form.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStudentComponent,
    ProfileStudyComponent,
    VocationalFormComponent,
    UniversityDegreeComponent,
    ProfileLanguageComponent,
    ProfileAccountComponent,
    ProfileAccountFormComponent
  ],
  imports: [SharedModule, ProfileRoutingModule]
})
export class ProfileModule {
}
