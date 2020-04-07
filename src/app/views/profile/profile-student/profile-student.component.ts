import { Component } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
  user: User;
  constructor(private profileService: ProfileService) {
    this.user = this.profileService.user;
  }

  deleteStudy(studyID: number) {
    const studies = this.user.studies;
    const index = studies.findIndex(study => study.uid === studyID);
    if (index === -1) {
      alert('Error: Study not found');
      return;
    }
    studies.splice(index, 1);
    this.profileService.updateProfile(this.user);
  }
  deleteLanguage(languageID: any) {
    const languages = this.user.languages;
    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert('Error: Language not found');
      return;
    }
    languages.splice(index, 1);
    this.profileService.updateProfile(this.user);
  }
}
