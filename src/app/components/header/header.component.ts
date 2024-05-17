import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() translucent: boolean = false;
  @Input() collapse: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  toArticlePage() {
    if (this.router.url !== '/article') {
      this.router.navigate(['/article']);
    }
  }

  toHomePage() {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']);
    }
  }
}
