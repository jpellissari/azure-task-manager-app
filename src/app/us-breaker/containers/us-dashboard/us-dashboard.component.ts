import { Component } from '@angular/core'
import { WorkItemService } from 'src/app/services/work-item.service'

@Component({
  selector: 'app-us-dashboard',
  templateUrl: './us-dashboard.component.html',
  styleUrls: ['./us-dashboard.component.scss'],
})
export class UsDashboardComponent {
  workItemNumber: number

  constructor(private workItemService: WorkItemService) {}

  updateWorkItemNumber(event: Event) {
    this.workItemNumber = parseInt((event.target as HTMLInputElement).value)
  }

  searchWorkItem() {
    console.log('Searching WI with id = ', this.workItemNumber)
    this.workItemService.get(this.workItemNumber).subscribe()
  }
}
