import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/classes/skill';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  skillList: Skill[] = [
    {
      title: 'Front-End',
      itemList: ['Angular', 'Ionic', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Back-End',
      itemList: ['PHP', 'JAVA', 'SpringBoot', 'Python', 'MySQL'],
    },
    { title: 'Other', itemList: ['Git', 'AWS', 'GCP', 'VBA'] },
  ];

  constructor() {}

  ngOnInit() {}
}
