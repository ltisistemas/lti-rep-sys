import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DarkThemeService {
  darkTheme$ = new Subject<boolean>();

  constructor() {
    this.darkTheme$.asObservable().subscribe((state) => {
      localStorage.setItem('dark-theme', '' + state);

      if (state) document.body.classList.add('dark-theme');
      else document.body.classList.remove('dark-theme');
    });

    const darkMode = localStorage.getItem('dark-theme');
    if (darkMode) this.darkTheme$.next(darkMode === 'true');
    else this.darkTheme$.next(false);
  }
}
