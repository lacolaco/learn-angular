import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'emitter',
    template: `
    <h3>Output</h3>
    <button (click)="onClick()">Emit</button>
    `
})
export class EmitterComponent {
    @Output() output = new EventEmitter();

    onClick() {
        this.output.emit({});
    }
}