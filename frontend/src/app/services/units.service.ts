import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { Countdown } from '../models/countdown.model';


@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private countdownSubject: BehaviorSubject<Countdown>;
  countdown$: Observable<Countdown>;

  constructor() {
    this.countdownSubject = new BehaviorSubject<Countdown>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.countdown$ = this.countdownSubject.asObservable();
  }

  startCountdown(date: Date) {
    const countDownDate = date.getTime();
    const x = interval(1000).subscribe(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const countdown: Countdown = {
        days,
        hours,
        minutes,
        seconds
      };

      this.countdownSubject.next(countdown);
      if (distance < 0) {
        x.unsubscribe(); 
        this.countdownSubject.next({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    });
  }
}
