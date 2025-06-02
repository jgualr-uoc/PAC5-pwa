import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../../../Models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() product: Product = null as any;

}
