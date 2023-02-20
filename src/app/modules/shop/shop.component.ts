import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Helpers } from '@app/shared/helpers/helpers';
import { CategoriesService } from '@shared/services/categories.service';
import { ProductsService } from '@shared/services/products.service';
import { ShopParams } from './shop.model';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  params: any = new ShopParams(null);
  constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private _router: Router, route: ActivatedRoute
  ) {

    route.queryParams.subscribe((p: any) => {
      this.parseParams()

    }); // you can also do this in ngOnInit

  }
  data = {
    products: [] as any[],
    categories: [] as any[],
  }
  ngOnInit(): void {
    this.parseParams();
    this.getCategories();
  }
  parseParams(_changeUrl = true) {
    // GapParams
    const object = Helpers.convertParamsToObject(Helpers.getParamString());
    // parse params to model
    this.params = new ShopParams(object);
    if (_changeUrl) {
      this.changeUrl();
    }
  }
  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.data.products = products;
    })
  }
  getCategories() {
    this.categoriesService.getCategories().subscribe(categories => {
      this.data.categories = categories;
    })
  }
  changeUrl(getList = true) {
    this.params = new ShopParams(this.params);
    const param = this.cleanParam(this.params);
    this._router.navigate([], {
      queryParams: param,
      queryParamsHandling: 'merge'
    });
    if (getList) this.onSearch();
  }
  cleanParam(params: any): any {
    let _paramClean: any = {};

    for (let field in params) {
      if (field === 'categories') {
        _paramClean.categories = params.categories.join(',');
      }
      else if (params[field] !== null && params[field] !== undefined) {
        _paramClean[field] = params[field];
      }
      else {
        _paramClean[field] = null;
      }
    }
    return _paramClean;
  }
  onChangesCategory(evt: any) {
    const category = evt.target.value;
    this.params.categories = this.toggleCategoryInArray(category, this.params.categories);
    this.changeUrl()
  }
  onSearch() {
    const categoryIds = this.params.categories;
    const searchkey = this.params.searchKey;
    this.productsService.getProductsByFilter({ categoryIds, description: searchkey, name: searchkey }).subscribe(products => {
      this.data.products = products
    })
  }
  toggleCategoryInArray(item: string, categories: string[]) {
    const index = categories.indexOf(item);
    if (index === -1) {
      // String not found in categories, so add it
      categories.push(item);
    } else {
      // String found in categories, so remove it
      categories.splice(index, 1);
    }
    return categories;
  }

}
