import { Injectable, signal } from '@angular/core';

// Este decorador hace que Angular pueda inyectar este servicio donde sea necesario
@Injectable({ providedIn: 'root' })
export class ThemeService {
  // Creamos un "signal" para controlar si está activado el modo oscuro
  // Lo inicializamos con la preferencia guardada o la del sistema
  private darkTheme = signal(this.getInitialTheme());

  // Esta variable guarda el nombre de la clase del tema de la página actual
  private activeThemeClass: string | null = null;

  constructor() {
    // Aplica el tema oscuro/claro al body en cuanto inicia el servicio
    this.applyDarkTheme();

    // Detecta si el usuario cambia el modo de su sistema operativo
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', e => {
      // Solo se cambia si el usuario no ha establecido una preferencia manual
      if (!this.hasUserPreference()) {
        this.setDarkMode(e.matches);
      }
    });
  }

  // Cambia entre modo oscuro y claro
  toggleDarkMode() {
    const newValue = !this.darkTheme(); // Cambia el valor actual
    this.setDarkMode(newValue);         // Aplica el nuevo valor
    localStorage.setItem('dark-mode', String(newValue)); // Guarda preferencia del usuario
  }

  // Devuelve el ícono del sol o la luna, según el modo actual (útil para el botón)
  get icon(): string {
    return this.darkTheme() ? '🌙' : '☀️';
  }

  // Expone solo lectura del estado actual (opcional para usar en componentes reactivos)
  isDark = this.darkTheme.asReadonly();

  // Cambia el estado del modo oscuro y lo aplica al body
  setDarkMode(value: boolean) {
    this.darkTheme.set(value);   // Actualiza el signal
    this.applyDarkTheme();       // Cambia la clase en el body
  }

  // Agrega o quita la clase `dark-theme` en el <body> según el valor del signal
  private applyDarkTheme() {
    document.body.classList.toggle('dark-theme', this.darkTheme());
  }

  // Verifica si el usuario ya tiene una preferencia guardada
  private hasUserPreference(): boolean {
    return localStorage.getItem('dark-mode') !== null;
  }

  // Obtiene el valor inicial del modo oscuro:
  // - Si está en localStorage, lo usa
  // - Si no, usa la configuración del sistema (media query)
  private getInitialTheme(): boolean {
    const stored = localStorage.getItem('dark-mode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // 🧩 APLICA TEMA POR PÁGINA (como theme-home, theme-profile, etc.)
  setPageTheme(themeClass: string) {
    // Quita el tema anterior si había
    if (this.activeThemeClass) {
      document.body.classList.remove(this.activeThemeClass);
    }

    // Aplica el nuevo tema al body
    document.body.classList.add(themeClass);
    this.activeThemeClass = themeClass; // Guarda el nombre actual
  }

  // Limpia el tema de página actual cuando se navega a otra
  clearPageTheme() {
    if (this.activeThemeClass) {
      document.body.classList.remove(this.activeThemeClass);
      this.activeThemeClass = null;
    }
  }
}
