import { Component } from '@angular/core';
import { CarouselComponent } from '../../partials/carousel/carousel.component';
import { ShopSectionComponent } from '../../partials/shop-section/shop-section.component';
import { AnnouncementComponent } from '../../partials/announcement/announcement.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ShopSectionComponent, AnnouncementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public flashSales = {
      title: 'Todays',
      bigTitle: 'Flash Sales',
      actions: 'arrow',
      viewType: 'image',
      colums:  1,
  }

  public category = {
    title: 'Categories',
    bigTitle: 'Browse By Category',
    actions: 'arrow',
    viewType: 'icon',
    colums:  1,
  }

  public bestSellingProduct = {
    title: 'This Month',
    bigTitle: 'Best Selling Products',
    actions: 'button',
    viewType: 'image',
    colums:  1,
  }

  public ourProducts = {
    title: 'Our Products',
    bigTitle: 'Explore Our Products',
    actions: 'arrow',
    viewType: 'image',
    colums:  2,
  }
}
