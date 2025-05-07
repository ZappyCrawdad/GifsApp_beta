import { Component } from '@angular/core';

interface MenuOptions {
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent { 

  menuOptions:MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs Populares',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnify-glass',
      label: 'Buscador',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search'
    },
  ];

}
