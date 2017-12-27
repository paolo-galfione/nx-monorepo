import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, CUSTOMER_URL } from '@nx-monorepo/entities';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient,
              @Inject(CUSTOMER_URL) private url: string) {}

  get(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  getById(id: number): Observable<Customer>{
    return this.http.get<Customer[]>(this.url)
               .map((cs: Customer[]) => cs.find(x => x.id === id));
  }

}
