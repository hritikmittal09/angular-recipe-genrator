import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  

  ingredients: String[] = []
  submit(PassIngredent : any) {
  this.ingredients.push( PassIngredent.value.InputBoxIngredient)
  
  

  
  

}

  

}
