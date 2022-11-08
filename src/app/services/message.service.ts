import { Injectable } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string = ''

  constructor() { }

  add(message: any) {
    this.message = message

    setTimeout(() => {
      this.clear();
      location.reload()
    },2000)
  };

  clear() {
    this.message = ''
  }
}
