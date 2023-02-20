import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as categoriesData from '../../data/categories.json'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  data = categoriesData

  constructor() { }
  getCategories(): Observable<any> {
    return of(this.data)
  }


}
