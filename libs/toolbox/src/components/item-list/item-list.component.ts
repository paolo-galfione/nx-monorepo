import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../../models/item";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html"
})
export class ItemListComponent {
  @Input() items: Item[];
  @Output() selected = new EventEmitter<any>();

  onSelect(id: number) {
    event.preventDefault();
    this.selected.emit(id);
  }
}
