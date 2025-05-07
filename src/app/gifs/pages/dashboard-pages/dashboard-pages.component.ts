import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from "../../components/gifs-side-menu/side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "../../components/gifs-side-menu/side-menu-options/side-menu-options.component";
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet, SideMenuHeaderComponent, SideMenuOptionsComponent, GifsSideMenuComponent],
  templateUrl: './dashboard-pages.component.html',
})
export default class DashboardPagesComponent { }
