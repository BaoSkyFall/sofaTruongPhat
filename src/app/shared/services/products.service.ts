import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as productsData from '../../data/products.json'
import * as categoriesData from '../../data/categories.json'
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = (productsData as any).default || [] as any[];
  categories: any[] = (categoriesData as any).default || [] as any[];


  constructor() { }
  getProducts(): Observable<any> {
    const result = _.cloneDeep(this.products);
    return of(this.mappingProductWithCategory(_.cloneDeep(result)))
  }
  getProductsByFilter(filter: { categoryIds: string[], name: string, description: string }) {
    const result = _.cloneDeep(this.products);
    return of(this.filterByCategoryAndNameAndDescription(result, filter))

  }
  filterByCategoryAndNameAndDescription(list: any[], filter: { categoryIds: string[], name: string, description: string }) {
    return list.filter(item => {
      // Check if the item's categoryIds array contains all the category IDs in the provided array
      if (filter.categoryIds && filter.categoryIds.length > 0) {
        if (!filter.categoryIds.every(id => item.categoryIds.includes(id))) {
          return false;
        }
      }
      if (filter.name && !item.name.toLowerCase().includes(filter.name.toLowerCase())) {
        return false;
      }
      if (filter.description && !item.description.toLowerCase().includes(filter.description.toLowerCase())) {
        return false;
      }
      return true;
    });
  }

  mappingProductWithCategory(productList: any[]) {
    const categories = this.categories
    productList.forEach((product: any) => {
      product.categoryIds = product.categoryIds.map((item: string) => ({
        categoryId: item,
        categoryName: _.find(categories, (o: any) => o.name == item)
      }))
    })
    return productList
  }
  getListOfProductsRecommend(categoryId: string) {
    const result = _.cloneDeep(this.products) as any[];
    // filter the list by categoryId
    const filteredList = result.filter(item => item.categoryIds.includes(categoryId));

    // sort the filtered list by name in ascending order
    filteredList.sort((a, b) => a.name.localeCompare(b.name));

    // return the first 10 items in the filtered and sorted list
    return filteredList.slice(0, 10);

  }

}
