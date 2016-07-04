## Forms

### Example

- Name (First,Last)
- Age (number)
- Sex (Male/Female/Other)

```json
{
  "name": {
    "first": "Taro",
    "last": "Tanaka"
  },
  "age": 24,
  "sex": "male"
}
```

### Form Template

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Forms-1</h1>
  <form>
    <b>Name: </b>
    <input type="text" placeholder="FirstName" name="firstName" required>
    <input type="text" placeholder="LastName" name="lastName" required>
    <hr>
    <b>Age: </b>
    <input type="number" placeholder="20" name="age" required>
    <hr>
    <b>Sex: </b>
    <select name="sex" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <hr>  
  </form>  
  `
})
export class MyApp {
}
```

### Bind Data

```ts
interface Person {
  name: {
    first: string;
    last: string;
  };
  age: number;
  sex: "male"|"female"|"other"
}
```

```ts
import { Component } from '@angular/core';

interface Person {
  name: {
    first: string;
    last: string;
  };
  age: number;
  sex: "male"|"female"|"other"
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Forms-1</h1>
  <pre><code>{{ personModel | json }}</code></pre>
  <form>
    <b>Name: </b>
    <input type="text" placeholder="FirstName" name="firstName" [(ngModel)]="personModel.name.first" required>
    <input type="text" placeholder="LastName" name="lastName" [(ngModel)]="personModel.name.last" required>
    <hr>
    <b>Age: </b>
    <input type="number" name="age" [(ngModel)]="personModel.age" required>
    <hr>
    <b>Sex: </b>
    <select name="sex" [(ngModel)]="personModel.sex" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <hr>  
  </form>  
  `
})
export class MyApp {

  personModel: Person = {
    name: {
      first: 'Taro',
      last: 'Tanaka'
    },
    age: 24,
    sex: 'male'
  };
}
```

### Submit

Use `ngSubmit`

```ts
import { Component } from '@angular/core';

interface Person {
  name: {
    first: string;
    last: string;
  };
  age: number;
  sex: "male"|"female"|"other"
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Forms-1</h1>
  <p>{{ message }}</p>
  <pre><code>{{ personModel | json }}</code></pre>
  <form (ngSubmit)="onSubmit();">
    <b>Name: </b>
    <input type="text" placeholder="FirstName" name="firstName" [(ngModel)]="personModel.name.first" required>
    <input type="text" placeholder="LastName" name="lastName" [(ngModel)]="personModel.name.last" required>
    <hr>
    <b>Age: </b>
    <input type="number" placeholder="20" name="age" [(ngModel)]="personModel.age" required>
    <hr>
    <b>Sex: </b>
    <select name="sex" [(ngModel)]="personModel.sex" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <hr>  
    <button type="submit">Submit</button>
  </form>  
  `
})
export class MyApp {

  message = "";

  personModel: Person = {
    name: {
      first: 'Taro',
      last: 'Tanaka'
    },
    age: 24,
    sex: 'male'
  };

  onSubmit() {
    this.message = `Submit: ${JSON.stringify(this.personModel)}`;
  }
}
```

### Form Value

`ngForm.value`

```ts
import { Component } from '@angular/core';

interface Person {
  name: {
    first: string;
    last: string;
  };
  age: number;
  sex: "male"|"female"|"other"
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Forms-1</h1>
  <p>{{ message }}</p>
  <pre><code>{{ personModel | json }}</code></pre>
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value);">
    <b>Name: </b>
    <input type="text" placeholder="FirstName" name="firstName" [(ngModel)]="personModel.name.first" required>
    <input type="text" placeholder="LastName" name="lastName" [(ngModel)]="personModel.name.last" required>
    <hr>
    <b>Age: </b>
    <input type="number" placeholder="20" name="age" [(ngModel)]="personModel.age" required>
    <hr>
    <b>Sex: </b>
    <select name="sex" [(ngModel)]="personModel.sex" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <hr>  
    <button type="submit">Submit</button>
  </form>  
  `
})
export class MyApp {

  message = "";

  personModel: Person = {
    name: {
      first: 'Taro',
      last: 'Tanaka'
    },
    age: 24,
    sex: 'male'
  };

  onSubmit(value: any) {
    this.message = `Submit: ${JSON.stringify(value)}`;
  }
}
```

### Form Group

`ngModelGroup`

```ts
import { Component } from '@angular/core';

interface Person {
  name: {
    first: string;
    last: string;
  };
  age: number;
  sex: "male"|"female"|"other"
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Forms-1</h1>
  <p>{{ message }}</p>
  <pre><code>{{ personModel | json }}</code></pre>
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value);">
    <b>Name: </b>
    <div ngModelGroup="name">
      <input type="text" placeholder="FirstName" name="first" [(ngModel)]="personModel.name.first" required>
      <input type="text" placeholder="LastName" name="last" [(ngModel)]="personModel.name.last" required>
    </div>
    <hr>
    <b>Age: </b>
    <input type="number" placeholder="20" name="age" [(ngModel)]="personModel.age" required>
    <hr>
    <b>Sex: </b>
    <select name="sex" [(ngModel)]="personModel.sex" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <hr>  
    <button type="submit">Submit</button>
  </form>  
  `
})
export class MyApp {

  message = "";

  personModel: Person = {
    name: {
      first: 'Taro',
      last: 'Tanaka'
    },
    age: 24,
    sex: 'male'
  };

  onSubmit(value: any) {
    this.message = `Submit: ${JSON.stringify(value)}`;
  }
}
```

### Validation

HTML5 Validation

- required
- min
- max
- ...

Custom Validation

`form novalidate`, `ngForm.valid`

```ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: {
    first: string;
    last: string;
  };
  age: number;
  sex: "male"|"female"|"other"
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Forms-1</h1>
  <p>{{ message }}</p>
  <pre><code>{{ personModel | json }}</code></pre>
  <form #f="ngForm" (ngSubmit)="onSubmit(f);" novalidate>
    <b>Name: </b>
    <div ngModelGroup="name" #name="ngModelGroup">
      <input type="text" placeholder="FirstName" name="first" [(ngModel)]="personModel.name.first" required>
      <input type="text" placeholder="LastName" name="last" [(ngModel)]="personModel.name.last" required>
      <p class="error" *ngIf="!name.valid">Name is required!</p>
    </div>
    <hr>
    <b>Age: </b>
    <input type="number" placeholder="20" name="age" [(ngModel)]="personModel.age" required #age="ngModel">
    <p class="error" *ngIf="!age.valid">Age is required!</p>
    <hr>
    <b>Sex: </b>
    <select name="sex" [(ngModel)]="personModel.sex" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <hr>  
    <button type="submit">Submit</button>
  </form>  
  `
})
export class MyApp {

  message = "";

  personModel: Person = {
    name: {
      first: 'Taro',
      last: 'Tanaka'
    },
    age: 24,
    sex: 'male'
  };

  onSubmit(form: NgForm) {
    this.message = `Submit:(${form.valid}) ${JSON.stringify(form.value)}`;
  }
}
```

disable submit button

```html
<button type="submit" [attr.disabled]="f.valid ? null : true">Submit</button>
```

