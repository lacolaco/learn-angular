## Component-1

### selector

```
  <element-selector>element-selector</element-selector>
  <div attrFirst>attrFirst</div>
  <div attrSecond="foo">attrSecond="foo"</div>
  <div attrSecond="bar">attrSecond="bar"</div>
  <div class="classSelector">class="classSelector"</div>
  <multiple-selector>multiple-selector</multiple-selector>
  <div multipleSelector>multipleSelector</div>
```  

### interpolation

```
    <p>{{ text }}</p>
    <p>{{ number }}</p>
    <p>{{ obj.prop1 }}</p>
    <p>{{ obj.prop2 }}</p>
    <p>{{ obj?.prop2?.prop }}</p>
    <p>{{ method(100) }}</p>
````

### Syntax

```
  template: `
  <h1>Component-1</h1>  
  <button (click)="onClick()">Click</button>
  <a [href]="linkToGoogle" target="_blank">Jump to Google</a>
  <input type="text" [(ngModel)]="inputText">
  <p>{{ inputText }}</p>
  `
})
export class MyApp {
  linkToGoogle = "https://www.google.com";

  onClick() {
    this.inputText = "Clicked";
  }

  inputText = "Hello!";
}
```

### Input

```
<presenter input="test"></presenter>
```

### Output

```
  template: `
  <h1>Component-1</h1>  
  <emitter (output)="alert();"></emitter>
  `
})
export class MyApp {

  alert() {
    alert('message');
  }
}
```
