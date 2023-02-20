import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as categoriesData from '../../data/categories.json'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  data = (categoriesData as any).default;

  constructor() { }
  getCategories(): Observable<any> {
    return of(this.data)
  }


}
