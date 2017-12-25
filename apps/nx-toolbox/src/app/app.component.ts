import { Component } from '@angular/core';
import { Item } from '@nx-monorepo/toolbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = [{ id: 1, text: 'Primo elemento' }, { id: 2, text: 'Secondo elemento' }];
  currentItem: Item;

  setCurrentItem(id) {
    this.currentItem = this.items.find(x => x.id === id);
  }
}
