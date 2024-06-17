import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MaterialModule } from './material/material.module';

import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { ColorDirective } from './custom-directives/color.directive';
import {  Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgForm } from '@angular/forms';

//import { AddIngredentsFormComponent } from './shopping-list/add-ingredents-form/add-ingredents-form.component';




 const appRoute :Routes = [
  {path : '' ,component : RecipesComponent , children: [
    
  ]},
  {path : "shop", component : ShoppingListComponent}
 ]
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
      RecipesDetailsComponent,
    
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    HeaderComponent,
    ColorDirective,
    NavigationComponent,
    
    
    

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
