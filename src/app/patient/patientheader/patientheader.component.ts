import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from './header.data';

@Component({
  selector: 'app-patientheader',
  templateUrl: './patientheader.component.html',
  styleUrls: ['./patientheader.component.scss']
})
export class PatientheaderComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
