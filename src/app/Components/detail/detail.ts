import { Component } from '@angular/core';
import { Api } from '../../Services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Models/product.interface';
import { BackBtn } from '../ui/back-btn/back-btn';


@Component({
  selector: 'app-detail',
  imports: [BackBtn],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail {
  product: Product | null = null;

  constructor(
    private api: Api,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      this.api.getProductById(id).subscribe({
        next: (data) => {
          if (!data) {
            this.router.navigate(['/']);
            return;
          }
          this.product = data;
        },
        error: (err) => {
          console.error('Error fetching product details:', err);
        }
      });
    }
  }
}