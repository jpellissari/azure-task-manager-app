import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { UsBreakerModule } from './us-breaker/us-breaker.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

const routes: Routes = [
  {
    path: 'us-breaker',
    loadChildren: () =>
      import('./us-breaker/us-breaker.module').then((m) => m.UsBreakerModule),
  },
  { path: '**', redirectTo: 'us-breaker' },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), UsBreakerModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
