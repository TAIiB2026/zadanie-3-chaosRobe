import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class FruitTrackingService {
  


  private lastFetchDateSubject = new BehaviorSubject<Date | null>(null);
  private lastDeleteDateSubject = new BehaviorSubject<Date | null>(null);



  lastFetchDate$: Observable<Date | null> = this.lastFetchDateSubject.asObservable();
  lastDeleteDate$: Observable<Date | null> = this.lastDeleteDateSubject.asObservable();


  updateLastFetchDate(): void {
    this.lastFetchDateSubject.next(new Date()); 
  }

  updateLastDeleteDate(): void {
    this.lastDeleteDateSubject.next(new Date());
  }
}
