import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { ToolboxModule } from '@nx-monorepo/toolbox';
export const customersRoutes: Route[] = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CustomerListComponent },
  { path: ':id', component: CustomerDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customersRoutes),
    HttpClientModule,
    ToolboxModule
  ],
  declarations: [CustomerListComponent, CustomerDetailComponent],
  providers: [CustomerService]
})
export class CustomersModule {}
