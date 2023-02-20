import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '@app/shared/services/categories.service';
import { ProductsService } from '@app/shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId = null;
  constructor(private route: ActivatedRoute, private router: Router,
    private productsService: ProductsService, private categoriesService: CategoriesService) { }
  data = {
    product: {} as any,
    productsRecommend: [] as any[]
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.getProductById()
    }
    else {
      this.router.navigate(['/shop'])
    }
  }
  getProductById() {
    this.productsService.getProductById(this.productId || '').subscribe(product => {
      this.data.product = product;
      console.log('this.data:', this.data);
      this.getProductsRecommend()
    })
  }
  getProductsRecommend() {
    this.productsService.getListOfProductsRecommend(this.data.product?.categoryIds[0]).subscribe(products => {
      this.data.productsRecommend = products;
      console.log('this.data.productsRecommend:', this.data.productsRecommend)
    })
  }
}
