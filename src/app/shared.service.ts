import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private langEngSubject = new BehaviorSubject<boolean>(false);
  langEng$ = this.langEngSubject.asObservable();

  constructor() {}

  setLangEng(value: boolean) {
    this.langEngSubject.next(value);
  }
}
