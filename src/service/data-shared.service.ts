import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Menu } from '../Model/menu';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  private userSource = new BehaviorSubject<boolean>(false);
  user$ = this.userSource.asObservable();

  constructor() { }

  update(value: boolean) {
    this.userSource.next(value);
  }

  get(): Observable<boolean> {
    return this.user$;
  }
}
