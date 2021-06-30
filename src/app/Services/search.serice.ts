import { Injector, Renderer2, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchSevice {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next(message);
  }

  clearMessges() {
    this.subject.next();
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
