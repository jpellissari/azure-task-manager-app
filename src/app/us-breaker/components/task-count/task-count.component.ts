import { Component, Input } from '@angular/core'
import { Task } from '../../models/task.interface'

@Component({
  selector: 'app-task-count',
  template: `
    <div>
      <span>{{ tasks.length }} tasks criadas</span>
    </div>
  `,
  styleUrls: ['./task-count.component.scss'],
})
export class TaskCountComponent {
  @Input('items') tasks: Task[]
}
