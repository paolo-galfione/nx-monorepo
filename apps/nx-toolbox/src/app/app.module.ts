import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { ToolboxModule } from '@nx-monorepo/toolbox';

@NgModule({
  imports: [BrowserModule, ToolboxModule, NxModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
