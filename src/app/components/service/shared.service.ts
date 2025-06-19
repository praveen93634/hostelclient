import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  title:Subject<any>=new Subject()
  constructor() { }
  sharedata(data:any){
    this.title.next(data)
  }
}
