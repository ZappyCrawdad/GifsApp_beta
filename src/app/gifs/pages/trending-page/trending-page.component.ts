import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements OnInit, OnDestroy{ 

  constructor(public theme: ThemeService) {}
  ngOnInit() {
    this.theme.setPageTheme('theme-home');
  }
  ngOnDestroy() {
    this.theme.clearPageTheme();
  }
  toggle() {
    this.theme.toggleDarkMode();
  }
}
