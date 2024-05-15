import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject = new BehaviorSubject<any>(null);

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }
}
