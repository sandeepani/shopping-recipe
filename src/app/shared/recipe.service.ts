import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/Recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  formData: Recipe ;
  public API = 'http://localhost:25316/api';
  public SUGARLEVELS_API = `${this.API}/Recipe`;
  constructor() {}
  // getAll(): Observable<Array<Recipe>> {
  //   return this.http.get<Array<Recipe>>(this.SUGARLEVELS_API);
  // }
  // get(id: string) {
  //   return this.http.get(`${this.SUGARLEVELS_API}/${id}`);
  // }
}
