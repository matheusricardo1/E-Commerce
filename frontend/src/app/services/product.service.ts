import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //ProductService
  private productAPI:string = 'http://localhost:8000/api/product/' 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productAPI);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productAPI}${id}/`);
  }
}
