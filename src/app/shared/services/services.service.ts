import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as servicesData from '../../data/services.json'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  data = servicesData

  constructor() { }
  getServices() {
    return of(this.data)
  }


}
