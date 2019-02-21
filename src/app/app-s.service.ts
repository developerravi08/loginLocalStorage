import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSService {


  change: EventEmitter<boolean> = new EventEmitter();
  constructor() { }



  getValueChanges(val) {
    return this.change.emit(val)
  }

  showValueChanges(callback) {
      this.change.subscribe(resp => callback(resp) );
  }


  

}
