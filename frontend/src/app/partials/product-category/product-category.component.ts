import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
  @Input() category: Category = {
    id: 1,
    image: "assets/images/categories/category-phone-icon.png",
    name: "Phone"
  }

  animationState: string = '';
  productCategoryClass: string = '';
  productCategoryIconClass: string = '';
  productCategoryNameClass: string = '';

  onMouseEnter() {
    this.productCategoryClass = 'product-category-hover';
    this.productCategoryIconClass = 'product-category-icon-hover';
    this.productCategoryNameClass = 'product-category-name-hover';
  }

  onMouseLeave() {
    this.productCategoryClass = '';
    this.productCategoryIconClass = '';
    this.productCategoryNameClass = '';
  } 

  
}
