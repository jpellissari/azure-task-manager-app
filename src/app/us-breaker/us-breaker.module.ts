import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { TaskCountComponent } from './components/task-count/task-count.component'
import { WiSearchComponent } from './components/wi-search/wi-search.component'
import { UsDashboardComponent } from './containers/us-dashboard/us-dashboard.component'
import { WorkItemService } from './services/work-item.service'

const routes: Routes = [
  { path: '', component: UsDashboardComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [UsDashboardComponent, WiSearchComponent, TaskCountComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [WorkItemService],
})
export class UsBreakerModule {}
