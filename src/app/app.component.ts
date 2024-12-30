import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wczesnoszkolni';

  @HostListener('document:click', ['$event']) onDocumentClick(
    event: MouseEvent
  ) {
    const clickedInside = (event.target as HTMLElement).closest(
      '#avatarButton'
    );
    if (!clickedInside) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    var menu = document.getElementById('menu');
    menu?.classList.toggle('hidden');
  }
}
