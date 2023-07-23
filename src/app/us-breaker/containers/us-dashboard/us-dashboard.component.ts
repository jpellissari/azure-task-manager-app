import { Component } from '@angular/core'
import { Task } from '../../models/task.interface'

@Component({
  selector: 'app-us-dashboard',
  templateUrl: './us-dashboard.component.html',
  styleUrls: ['./us-dashboard.component.scss'],
})
export class UsDashboardComponent {
  tasks: Task[] = []
  searchWorkItem(wiNumber: number) {
    console.log('Event received: ', wiNumber)
  }
}
