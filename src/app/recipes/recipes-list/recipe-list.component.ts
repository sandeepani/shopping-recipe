import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipe', 'Test description', 'https://www.aspicyperspective.com/wp-content/uploads/2016/04/ultimate-dorito-taco-salad-recipe-16-256x256.jpg')
    // tslint:disable-next-line:max-line-length
    , new Recipe('Recipe 2', 'description 2', 'https://www.aspicyperspective.com/wp-content/uploads/2017/02/best-italian-pasta-salad-13-256x256.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}

