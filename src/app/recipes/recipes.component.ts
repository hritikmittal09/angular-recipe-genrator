import { Component,OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [ RecipeService]
})
export class RecipesComponent implements OnInit  {
AnotherRecipe() {
window.location.reload()
}
  Recipes = {}
  id :any
  Api :any
  constructor( private recipeService : RecipeService, public route : ActivatedRoute ){}

    
    ngOnInit(): void {
      
      this.recipeService.Recipe_selected_using_service.subscribe((recipe : Recipe)=>{
        this.Recipes =recipe
        


      })
      
    }

  }
  

  
  


