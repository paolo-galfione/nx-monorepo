import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CUSTOMER_URL } from '@nx-monorepo/entities';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'customers', loadChildren: '@nx-monorepo/customers#CustomersModule' }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [
    {provide: CUSTOMER_URL, useValue: 'assets/customers.json'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
