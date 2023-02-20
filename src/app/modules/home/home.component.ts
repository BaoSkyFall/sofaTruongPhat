import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@shared/services/categories.service';
import { ProductsService } from '@shared/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) { }
  owlOption: OwlOptions = {
    autoplay: false,
    autoplaySpeed: 2000,
    nav: false,
    dots: false,
    loop: true,
    navSpeed: 1000,
    // navText: ['<i class="fa fa-angle-left slick-arrow"></i>', '<i class="fa fa-angle-right slick-arrow"></i>'],

    items: 1
  };
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
