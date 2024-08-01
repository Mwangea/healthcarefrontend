// src/app/component/header/header.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavData } from './header.data';
//import { NavData } from '../../nav-links'; // Ensure the import path is correct

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('headRef') headRef!: ElementRef;
  @ViewChild('menuRef') menuRef!: ElementRef;

  navLinks = NavData;

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleStickyHeader.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleStickyHeader.bind(this));
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  handleStickyHeader(): void {
    if (window.scrollY > 80) {
      this.headRef.nativeElement.classList.add('sticky__header');
    } else {
      this.headRef.nativeElement.classList.remove('sticky__header');
    }
  }

  toggleMenu(): void {
    this.menuRef.nativeElement.classList.toggle('show__menu');
  }
}
