import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuActive = signal<boolean>(false);
  onMobileMenuBtnClicked() {
    this.isMobileMenuActive.set(!this.isMobileMenuActive());
  }
}
