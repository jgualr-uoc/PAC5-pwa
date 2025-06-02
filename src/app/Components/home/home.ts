import { Component } from '@angular/core';
import { Api } from '../../Services/api';
import { Product } from '../../Models/product.interface';
import { CommonModule } from '@angular/common';
import { Card } from '../ui/card/card';
import { List } from '../ui/list/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card, List, MatButtonToggleModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  products: Product[] = [];
  view = 'list'; // Default view
  constructor(private api: Api) {
  }

  ngOnInit() {

    this.api.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
