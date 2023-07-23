import { Component } from '@angular/core'

@Component({
  selector: 'app-us-dashboard',
  templateUrl: './us-dashboard.component.html',
  styleUrls: ['./us-dashboard.component.scss'],
})
export class UsDashboardComponent {
  searchWorkItem(wiNumber: number) {
    console.log('Event received: ', wiNumber)
  }
}
