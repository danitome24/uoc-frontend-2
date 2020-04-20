import { Component, OnInit } from '@angular/core';
import {Experience} from '../../../shared/models/experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public experience: Experience = {} as Experience;

  constructor() { }

  ngOnInit(): void {
  }

}
