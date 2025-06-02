import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Product } from '../../../Models/product.interface';

@Component({
  selector: 'app-list',
  imports: [CommonModule, MatListModule, MatDividerModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  @Input() products: Product[] = null as any;

}
