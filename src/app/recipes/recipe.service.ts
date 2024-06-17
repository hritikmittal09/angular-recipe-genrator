import { EventEmitter, Injectable } from "@angular/core";
import axios from "axios";
import { Recipe } from "./recipes.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class RecipeService{
  Pfrom_api :any
 constructor( private http : HttpClient){

 }
 private options = {
  method: 'GET',
  url: `https://www.themealdb.com/api/json/v1/1/random.php`,

 } 
 public Recipe_selected_using_service = new EventEmitter<any>()
     private recipes: Recipe[] = [
        new Recipe("Burger","ndulge in the satisfying taste of a classic beef burger. This recipe brings together the juiciness of perfectly seasoned beef patties with a medley of fresh vegetables and savory toppings. Whether you're firing up the grill or using a stovetop pan, this burger will surely become a family favorite.", "assets/burger.jpeg"),
        new Recipe("pizza","Pizza, a beloved culinary creation originating from Italy, has won the hearts and taste buds of people all around the world. A symphony of flavors, textures, and aromas, pizza offers an irresistible combination of a crispy crust, velvety tomato sauce, gooey melted cheese, and an array of mouthwatering toppings","assets/pizza.jpeg")
      
      ]

    get_recipe(){
      return this.http.get(`https://www.themealdb.com/api/json/v1/1/random.php`)

        //return this.recipes.slice()
    }  
   
    

}