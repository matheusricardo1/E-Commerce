import { NgClass } from '@angular/common';
import { Component, Input, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductCategoryComponent } from '../product-category/product-category.component';

@Component({
  selector: 'app-shop-section',
  standalone: true,
  imports: [NgClass, ProductItemComponent, ProductCategoryComponent],
  templateUrl: './shop-section.component.html',
  styleUrl: './shop-section.component.css'
})
export class ShopSectionComponent implements OnInit{
  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef>;

  scrollLeft() {
    this.scrollContainers.forEach(container => {
      container.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }

  scrollRight() {
    this.scrollContainers.forEach(container => {
      container.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  @Input() title: string = '';
  @Input() bigTitle: string = '';
  @Input() actions: string = 'arrow';
  @Input() viewType: string = 'image';
  @Input() colums: number = 1;

  columsClass!:string;
  ngOnInit(): void {
    if (this.colums > 1) {
      this.columsClass = "columsGrid"
    }else{
      this.columsClass = "columsGridNone"
    }
  }

  public starRate2 = 4.7
}
