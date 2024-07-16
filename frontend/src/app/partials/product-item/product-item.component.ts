import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product = {
      "id": 1,
      "image": "assets/images/products/controller.png",
      "name": "HAVIT HV-G92 Gamepad",
      "price_offer": "-40%",
      "price": "120,00",
      "price_lined": "160,00",
      "star": 4.5,
      "rates_count": 88
  }
  animationState: string = '';

  onMouseEnter() {
    this.animationState = 'animate-in';
  }

  onMouseLeave() {
    this.animationState = 'animate-out';
  }
  
}
