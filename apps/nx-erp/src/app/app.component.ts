import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navItems = [{ menu: 'Home', link: 'home' }, { menu: 'Customers', link: 'customers' }];
}
