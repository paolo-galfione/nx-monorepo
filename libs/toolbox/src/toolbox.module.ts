import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemListComponent, ItemDetailComponent],
  exports: [ItemListComponent, ItemDetailComponent]
})
export class ToolboxModule {}
