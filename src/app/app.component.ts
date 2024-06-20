import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onFilterChanged(filter: any) {
    // Handle filter changes here, maybe pass to a service or use a state management solution
  }
}
