import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '@nx-monorepo/entities';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  get(): Observable<Customer[]> {
    return this.http.get<Customer[]>('assets/customers.json');
  }

  getById(id: number): Observable<Customer>{
    return this.http.get<Customer[]>('assets/customers.json')
               .map((cs: Customer[]) => cs.find(x => x.id === id));
  }

}
