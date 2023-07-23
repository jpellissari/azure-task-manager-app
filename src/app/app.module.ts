import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { UsDashboardComponent } from './us-breaker/containers/us-dashboard/us-dashboard.component'
import WiSearchComponent from './us-breaker/components/wi-search/wi-search.component';
import { TaskCountComponent } from './us-breaker/components/task-count/task-count.component'

@NgModule({
  declarations: [AppComponent, UsDashboardComponent, WiSearchComponent, TaskCountComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
