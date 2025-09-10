import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CombineAllComponent } from './operators/combine-all/combine-all.component';

@Component({
  selector: 'app-root',
  imports: [
    CombineAllComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial-rxjs';
}
