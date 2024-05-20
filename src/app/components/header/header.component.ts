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

  menuShow = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  toArticlePage() {
    this.closeMenu();
    if (this.router.url !== '/article') {
      this.router.navigate(['/article']);
    }
  }

  toHomePage() {
    this.closeMenu();
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']);
    }
  }

  toExperiencePage() {
    this.closeMenu();
    if (this.router.url !== '/experience') {
      this.router.navigate(['/experience']);
    }
  }

  openMenu() {
    this.menuShow = true;
  }

  closeMenu() {
    this.menuShow = false;
  }
}
