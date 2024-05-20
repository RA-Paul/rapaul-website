import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/classes/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {
  experience_list: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experience_list = this.experienceService.getExperienceList();
  }
}
