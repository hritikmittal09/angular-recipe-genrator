import { Component ,Input, OnInit, DoCheck } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})

export class RecipesDetailsComponent implements OnInit {
  id :any 
  public noDetaits =false
  IngredentNumber : number[]= [ 1 ,2,3 ,4 ,5,6,7,8,9,10,11,12]
constructor(private router : ActivatedRoute ){
  

}
  @Input() Set_recipe : any = {}
ngOnInit(): void {}
ngDoCheck() {
  // This method will be called during every change detection cycle
  if (Object.keys(this.Set_recipe).length === 0) {
    this.noDetaits = true
  }
  else{
    this.noDetaits = false
  }
  
  // You can perform custom logic here
  // For example, check for changes in data properties
}

}

