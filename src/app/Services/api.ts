import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { Product } from '../Models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    this.loadingSubject.next(true);
    return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      finalize(() => setTimeout(() => this.loadingSubject.next(false), 300))
    );
  }
  getProductById(id: string): Observable<Product> {
    this.loadingSubject.next(true);
    return this.http.get<Product>('https://fakestoreapi.com/products/' + id).pipe(
      finalize(() => setTimeout(() => this.loadingSubject.next(false), 300))
    );
  }
}

