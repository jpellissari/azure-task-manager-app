import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  workItemNumber: number

  updateWorkItemNumber(event: Event) {
    this.workItemNumber = parseInt((event.target as HTMLInputElement).value)
  }

  searchWorkItem() {
    console.log(this.workItemNumber)
  }
}
