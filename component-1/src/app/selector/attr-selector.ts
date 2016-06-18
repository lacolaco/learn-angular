import { Component } from '@angular/core';

@Component({
    selector: '[attrFirst]',
    template: 'attribute selector 1'
})
export class AttrSelectorComponent1 {
}

@Component({
    selector: '[attrSecond=foo]',
    template: 'attribute selector 2'
})
export class AttrSelectorComponent2 {
}
