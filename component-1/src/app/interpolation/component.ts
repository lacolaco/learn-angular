import { Component } from '@angular/core';

@Component({
    selector: 'interpolation',
    template: `
    <h2>Interpolation</h2>
    `
})
export class InterpolationComponent {
    text = 'テキスト';
    number = 1000;
    obj = {
        prop1: 'プロパティ'
    };
    method(num: number) {
        return num * 2;
    }
}