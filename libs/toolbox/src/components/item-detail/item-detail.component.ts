import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";
import { Item } from "@nx-monorepo/toolbox";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnChanges {
  @Input() item: Item;
  properties: string[][];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      this.properties = Object.entries(this.item);
    }
  }
}
