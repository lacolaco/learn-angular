import { Component, Input } from '@angular/core';

@Component({
    selector: 'presenter',
    template: `
    <h3>presenter</h3>
    <p>{{ input }}<p>
    `
})
export class PresenterComponent {
    @Input() input;
}