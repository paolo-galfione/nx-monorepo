import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '@nx-monorepo/entities';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(private route: ActivatedRoute,
    private customerService: CustomerService) {}

  ngOnInit() {
    const id = parseInt( this.route.snapshot.paramMap.get('id'), 10);
    this.customerService.getById(id).subscribe( (c: Customer) => this.customer = c);
  }
}
