import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core'
import { fromEvent, map, debounceTime, Subscription } from 'rxjs'

@Component({
  selector: 'app-wi-search',
  templateUrl: './wi-search.component.html',
  styleUrls: ['./wi-search.component.scss'],
})
export class WiSearchComponent implements AfterViewInit, OnDestroy {
  @Output('onWorkItemSearch')
  onSearch = new EventEmitter<number>()

  @ViewChild('workItemSearch') workItemSearch: ElementRef

  private subscription: Subscription

  ngAfterViewInit(): void {
    const $event = fromEvent<any>(
      this.workItemSearch.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(2000)
    )

    this.subscription = $event.subscribe((workItemNumber) =>
      this.onSearch.emit(workItemNumber)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
