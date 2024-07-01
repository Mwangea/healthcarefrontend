import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() {}

  ngOnInit():void{

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
