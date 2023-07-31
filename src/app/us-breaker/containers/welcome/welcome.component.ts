import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  faBomb = faBomb

  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/us-breaker/dashboard'])
  }
}
