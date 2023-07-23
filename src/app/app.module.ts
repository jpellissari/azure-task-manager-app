import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { UsBreakerModule } from './us-breaker/us-breaker.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UsBreakerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
