import { Component , OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :any = {}
  
  constructor(private recipes_service : RecipeService){
     
}
ngOnInit(): void {
 this.recipes_service.get_recipe().subscribe((recipe)=>{
  this.recipes = recipe
 })
}
anotherRecipe(){
window.location.reload()

}



}

  
  


  
