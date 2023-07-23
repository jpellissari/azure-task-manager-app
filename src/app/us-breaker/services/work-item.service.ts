import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs'

type WorkItem = {
  id: number
  title: string
  description: string
}

@Injectable({
  providedIn: 'root',
})
export class WorkItemService {
  baseUrl = 'http://localhost:3333/api'

  constructor(private http: HttpClient) {}

  get(workItemID: number): Observable<WorkItem> {
    return this.http
      .get<WorkItem>(`${this.baseUrl}/us-breaker/${workItemID}`)
      .pipe(tap((data) => console.log(data)))
  }
}
