import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SchemaFormModule, WidgetRegistry } from 'angular2-schema-form';

import { AppComponent } from './app.component';
import { MediumWidgetComponent } from './medium.widget';
import { MediumEditorComponent } from './medium';
import { MyWidgetRegistry } from './registry';

@NgModule({
  declarations: [
    AppComponent,
    MediumWidgetComponent,
    MediumEditorComponent,
  ],
  entryComponents: [
    MediumWidgetComponent,
  ],
  imports: [
    SchemaFormModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    { provide: WidgetRegistry, useClass: MyWidgetRegistry }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
