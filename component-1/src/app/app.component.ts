import { Component } from '@angular/core';

import { ElementSelectorComponent } from './selector/element-selector';
import { AttrSelectorComponent1, AttrSelectorComponent2 } from './selector/attr-selector';
import { ClassSelectorComponent } from './selector/class-selector';
import { MultipleSelectorComponent } from './selector/multiple-selector';
import { InterpolationComponent } from './interpolation/component';
import { PresenterComponent } from './interaction/presenter';
import { EmitterComponent } from './interaction/emitter';

@Component({
  selector: 'my-app',
  directives: [
    ElementSelectorComponent,
    AttrSelectorComponent1, AttrSelectorComponent2,
    ClassSelectorComponent, 
    MultipleSelectorComponent,
    InterpolationComponent,
    PresenterComponent,
    EmitterComponent,
  ],
  template: `
  <h1>Component-1</h1>  
  `
})
export class MyApp {
}
