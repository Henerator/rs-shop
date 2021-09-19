import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@core/models/category.model';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';
import { GoodsHttpService } from 'src/app/services/goods-http.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  subcategory: {
    id: string,
    name: string
  };

  currentSubcategory: string;

  category: Category;

  productId: string;

  product: Product;

  selectedPhotoIndex: number;

  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
    private categoriesHttpService: CategoriesHttpService,
    private goodsHttpService: GoodsHttpService) {
    this.subscription = activatedRoute.params.subscribe(params => {
      this.currentSubcategory = params.categoryName;
      this.productId = params.productId;
    });
  }

  ngOnInit(): void {
    this.categoriesHttpService.getCategories().subscribe(categories => {
      for(let i = 0; i < categories.length; i++) {
        let curSubcategory = categories[i].subCategories.find(subcategory => subcategory.id === this.currentSubcategory);
        if(curSubcategory) {
          this.subcategory = curSubcategory;
          this.category = categories[i];
          break;
        }
      }
    });
    this.goodsHttpService.getProductById(this.productId).subscribe(product => this.product = product);
    this.selectedPhotoIndex = 0;
  }

  switchPhoto(index: number) {
    this.selectedPhotoIndex = index;
  }

}