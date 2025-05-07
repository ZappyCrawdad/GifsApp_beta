import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-background-page',
  imports: [],
  templateUrl: './Background-page.component.html',
})
export default class BackgroundPageComponent implements OnInit, OnDestroy{ 
  
  constructor(public theme: ThemeService) {}

  //Este método se ejecuta automáticamente cuando el componente se carga. Quita cualquier clase de tema previa del <body>.
  ngOnInit() {
    this.theme.setPageTheme('theme-home');
  }

  //Este método se ejecuta cuando el componente se elimina (por ejemplo, al navegar a otra ruta)
  ngOnDestroy() {
    this.theme.clearPageTheme();
  }

  //Cambia entre modo claro y oscuro. Guarda la preferencia en localStorage para que persista al recargar la página
  toggle() {
    this.theme.toggleDarkMode();
  }
}
