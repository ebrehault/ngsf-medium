import {
  WidgetRegistry,
  DefaultWidgetRegistry
} from 'angular2-schema-form';
import { MediumWidgetComponent } from './medium.widget';

export class MyWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('richtext', MediumWidgetComponent);
  }
}