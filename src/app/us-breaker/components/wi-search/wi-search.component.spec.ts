import { ComponentFixture, TestBed } from '@angular/core/testing'

import WiSearchComponent from './wi-search.component'

describe('WiSearchComponent', () => {
  let component: WiSearchComponent
  let fixture: ComponentFixture<WiSearchComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WiSearchComponent],
    })
    fixture = TestBed.createComponent(WiSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
