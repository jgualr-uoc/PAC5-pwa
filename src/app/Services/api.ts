import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor( private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductById(id: string): Observable<Product> {    
    return this.http.get<Product>('https://fakestoreapi.com/products/' + id);
  }
}
