import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  imports: [MatProgressSpinnerModule],
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

}
