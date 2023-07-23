import { Component } from '@angular/core'
import { WorkItemService } from './services/work-item.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
