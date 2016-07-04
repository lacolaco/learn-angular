## Template

### 前回のおさらい

- Componentの呼び出し
- interpolation
- binding `[prop]`
- evend handling `(event)`
- 2-way binding `[(ngModel)]`
- Input/Output

### Pipe

Built-in Pipes

- uppercase/lowercase
- replace
- Decimal/Percent
- Currency
- Date
- Slice
- JSON
- Async

```ts
@Component({
  selector: 'my-app',
  directives: [
  ],
  template: `
  <h1>Forms</h1>  
  <p>{{ text | uppercase}}</p>
  <p>{{ text | replace:'foo':'bar' }}</p>
  <p>{{ num | number:'3.1-3' }}</p>
  <p>{{ price | currency:'JPY':true }}</p>
  <p>{{ now | date:'yyyy/MM/dd' }}</p>
  <p>{{ array | slice:2:4 }}</p>
  <p>{{ obj | json }}</p>
  <p>{{ promise | async }}</p>
  `
})
export class MyApp {
  text = "foo bar";
  num = 3.1419;
  price = 1080;
  now = new Date();
  array = [0, 1, 2, 3, 4];
  obj = { foo: 'bar' };
  promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}
````

Custom Pipe

- 先頭を大文字にする

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {
  transform(input: string): string {
      if (!input)  {
          return '';
      }
    const initialChar = input.charAt(0).toUpperCase();
    const sub = input.substring(1);
    return initialChar + sub;
  }
}
```

```ts
import { Component } from '@angular/core';

import { InitialPipe } from './initial.pipe';

@Component({
  selector: 'my-app',
  pipes: [
    InitialPipe
  ],
  template: `
  <h1>Template</h1>  

  <p>{{ text | initial }}</p>
  `
})
export class MyApp {
  text = "foo bar";
}
```

### Template reference variables

- input
- form

```
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Template</h1>  

  <form #f>
  <input type="text" #text>
  <button (click)="showAlert(text.value);">Show Alert</button>
  </form>

  <button (click)="f.reset();">reset</button>
  `
})
export class MyApp {
  
  showAlert(msg: string) {
    alert(msg);
  }
}
```

- component's method calling

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'switch',
    template: `
    <p>{{ mode==1 ? text1 : text2 }}</p>
    `
})
export class SwitchComponent {
    text1 = 'Text 1';
    text2 = 'Text 2';

    mode = 1;

    switch() {
        this.mode = this.mode * -1;
    }
}
```

```ts
import { Component } from '@angular/core';

import { SwitchComponent } from './switch.component';

@Component({
  selector: 'my-app',
  directives: [ SwitchComponent ],
  template: `
  <h1>Template</h1>  

  <switch #s></switch>

  <button (click)="s.switch();">Switch</button>
  `
})
export class MyApp {
  
  showAlert(msg: string) {
    alert(msg);
  }
}
```

