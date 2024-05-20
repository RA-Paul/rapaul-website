import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/classes/experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Experience = {
    title: '',
    description: '',
    link: '',
    image: '',
    date: '',
    tags: [],
  };

  constructor() {}

  ngOnInit() {}

  open() {
    if (this.experience.link) {
      window.open(this.experience.link, '_blank');
    }
  }
}
