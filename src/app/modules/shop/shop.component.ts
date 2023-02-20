import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@shared/services/categories.service';
import { ProductsService } from '@shared/services/products.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) { }
  data = {
    products: [] as any[],
    categories: [] as any[],
  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
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

}
