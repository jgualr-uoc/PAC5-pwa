import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-back-btn',
  imports: [ MatButtonModule, MatIcon],
  templateUrl: './back-btn.html',
  styleUrl: './back-btn.scss'
})
export class BackBtn {
  goBack() {
    window.history.back();
  }
}
