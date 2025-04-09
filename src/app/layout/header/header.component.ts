import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideHouse,
  lucidePalette,
  lucideMail,
  lucideBookMarked,
  lucideFileDown,
} from '@ng-icons/lucide';
import { Navigation } from './navigation.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon, NgFor],
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
  navigationItems: Navigation[] = [
    {
      title: 'Home',
      route: '/',
      icon: 'lucideHouse',
    },
    {
      title: 'Portfolio',
      route: '/portfolio',
      icon: 'lucidePalette',
    },
    {
      title: 'Contact',
      route: '/contact',
      icon: 'lucideMail',
    },
    {
      title: 'Blog',
      route: '/blog',
      icon: 'lucideBookMarked',
    },
    {
      title: 'Download CV',
      route: '/cv',
      icon: 'lucideDownload',
    },
  ];
  onMobileMenuBtnClicked() {
    this.isMobileMenuActive.set(!this.isMobileMenuActive());
  }
}
