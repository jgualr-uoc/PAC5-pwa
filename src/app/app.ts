import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './Components/ui/spinner/spinner.component';
import { Api } from './Services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpinnerComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'PAC-5';
  isLoading: boolean = false;

  constructor(private api: Api){}

  ngOnInit() {
    this.api.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
