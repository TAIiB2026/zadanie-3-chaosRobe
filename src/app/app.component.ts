import { Component } from '@angular/core';
import { FruitTrackingService } from './fruit-tracking.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent {
  constructor(public FruitTrackingService: FruitTrackingService) {}
}
