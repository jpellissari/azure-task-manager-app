import { Component } from '@angular/core'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  faBomb = faBomb
}
