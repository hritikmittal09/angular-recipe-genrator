import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatListModule } from '@angular/material/list';



const MatComponent = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule
  
  

]


@NgModule({
  
  imports: [
    MatComponent
    
  ],
  exports: [
    MatComponent

  ]
})
export class MaterialModule { }
