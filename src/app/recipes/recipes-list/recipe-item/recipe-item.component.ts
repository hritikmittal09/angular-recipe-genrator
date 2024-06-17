import { Component ,Input} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() Recipe_item : any = {}
constructor(private RecipeService : RecipeService){


}
RecipeItem_sected(Recipe_item:Recipe){
this.RecipeService.Recipe_selected_using_service.emit(Recipe_item)  

}


}
