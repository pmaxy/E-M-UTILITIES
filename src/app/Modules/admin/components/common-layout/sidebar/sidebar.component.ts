import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isHidden1=true
  isHidden=true
  isHidden2=true

  closeNav1(){
    this.isHidden1=!this.isHidden1

  }
  closeNav(){
    this.isHidden=!this.isHidden

  }
  closeNav2(){
    this.isHidden2=!this.isHidden2

  }
}
