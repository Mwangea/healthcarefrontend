import { languages } from './header-dummy-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;


  selectedLanguage: any;

  languages = languages;

  constructor() {}

  ngOnInit():void{

    this.selectedLanguage = this.languages[0];
  }

  getHeadClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'header-trimmed';
    }else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
}
