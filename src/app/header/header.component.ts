import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideHouse,
  lucidePalette,
  lucideMail,
  lucideBookMarked,
  lucideFileDown,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      lucideHouse,
      lucidePalette,
      lucideMail,
      lucideBookMarked,
      lucideFileDown,
    }),
  ], // Add the icon to the provider
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenuActive = signal<boolean>(false);

  onMobileMenuBtnClicked() {
    this.isMobileMenuActive.set(!this.isMobileMenuActive());
  }
}
