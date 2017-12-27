import { Component, OnInit } from '@angular/core';
import { Customer } from '@nx-monorepo/entities';
import { CustomerService } from '../../services/customer.service';
import { Item } from '@nx-monorepo/toolbox';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
customers: Item[];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.get()
      .subscribe((cs: Customer[]) => {
        this.customers = cs.map((c: Customer) => {
          return <Item>{id: c.id, text: `${c.first} ${c.last}`};
        });
      });
  }

  onSelected(id: number){
    this.router.navigate(['..', id], {relativeTo: this.route});
  }
}
