import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output() selected_option= new EventEmitter<string>()
chage_page(changed_option : string){
  this.selected_option.emit(changed_option)
}
}
