import { Component } from '@angular/core';
import * as MediumEditor from 'medium-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  schema: any;
  model: any;
  actions = {};

  constructor() {
    this.schema = {
      '$schema': 'http://json-schema.org/draft-04/hyper-schema#',
      'type': 'object',
      'properties': {
        'firstName': {
          'type': 'string',
          'placeholder': 'First name',
          'minLength': 2,
          'maxLength': 40,
          'title': 'First name',
          'description': 'First name'
        },
        'lastName': {
          'type': 'string',
          'placeholder': 'Last name',
          'minLength': 2,
          'maxLength': 40,
          'title': 'Last name',
          'description': 'Last name'
        },
        'biography': {
          'type': 'string',
          'placeholder': 'Tell us your story',
          'title': 'Biography',
          'description': 'Biography',
          'widget': 'richtext'
        }
      },
      'buttons': [{
        'label': 'Alert',
        'id': 'alert'
      }, ]
    };
    this.model = {
      'firstName': 'John',
      'lastName': 'Doe',
    };
    this.actions['alert'] = (property, options) => {
      console.log(property.value);
    };
  }
}
