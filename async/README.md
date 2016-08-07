## Async

- Promise
  - setTimeout + Promise
  - Promise.resolve/reject
  - Promise.all/race
  - Promise chain

- Observable
  - setInterval + Observable
- Array/Rx
  - forEach/map/filter

```ts
setTimeout(() => {
  console.log(new Date());
}, 3000);

const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(new Date());
  }, 3000);
});
p1.then(date => console.log(date));

const p2 = Promise.resolve(100);
p2.then(i => console.log(i));


const p3 = new Promise((resolve, reject) => {
  reject(new Error("rejected"));
});
p3.catch(err => console.error(err));

const p4 = Promise.reject(new Error("rejected"));
p4.catch(err => console.error(err));

function timerPromise(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

function promises() {
  return [timerPromise(1000), timerPromise(2000), timerPromise(3000)];
}

const pList1 = promises();
Promise.all(pList1).then(values => {
  console.log(values);
});

const pList2 = promises();
Promise.race(pList2).then(value => {
  console.log(value);
});

const p5 = Promise.resolve({ name: "Taro", age: 20 });
p5.then(person => {
  return `${person.name} (${person.age})`;
}).then(text => {
  console.log(text);
});
```

```ts
let obs$ = new Observable(observer => {
  let count = 0;
  const _timer = setInterval(() => {
    count++;
    if (count > 5) {
      clearInterval(_timer);
      observer.complete();
      return;
    }
    observer.next(new Date());
  }, 1000);
});
obs$.subscribe(date => {
  console.log(date);
});

Observable.interval(1000).subscribe(t => console.log(t));

Observable.fromArray([1, 2, 3]).subscribe(i => console.log(i));

Observable.of(100)
  .subscribe({
    next: i => console.log(`value: ${i}`),
    complete: () => console.log("complete!")
  });

Observable.throw("error")
  .subscribe(
    v => console.log(v),
    err => console.error(err)
  );

const sub = Observable.interval(1000).subscribe(t => console.log(t));
setTimeout(() => {
  sub.unsubscribe();
}, 3000);
```

```ts
const team = [
  { name: "Jack", age: 25 },
  { name: "Peter", age: 32 },
  { name: "John", age: 45 }
];

team.forEach(member => console.log(member.name));

team.map(member => member.name)
  .forEach(name => console.log(name));

team.filter(member => member.age > 200)
  .forEach(member => console.log(member));  

const total = team.reduce((total, member) => total + member.age, 0);
console.log(total);
```

```ts
Observable.fromArray([1, 2, 3]).do(i => {
  console.log(`do(${i})`)
}).subscribe(i => console.log(i));

Observable.fromArray([1, 2, 3]).map(i => {
  return i * 100;
}).subscribe(i => console.log(i));

Observable.fromArray([1, 2, 3]).filter(i => {
  return i % 2 === 1;
}).subscribe(i => console.log(i));

const sum = Observable.fromArray([1, 2, 3]).reduce(i => {
  return i % 2 === 1;
});
console.log(sum);
```

```ts
const sub = Observable.interval(1000).subscribe(t => console.log(t));
setTimeout(() => {
  sub.unsubscribe();
}, 3000);
```

```ts
const subject = new Subject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(1);
subject.next(2);
```

```ts
class Counter {
  subject = new Subject<number>();
  count = 0;

  increment() {
    this.subject.next(++this.count);
  }

  getObservable() {
    return this.subject.asObservable();
  } 
}
const counter = new Counter();

counter.getObservable().subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
counter.getObservable().subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

counter.increment();
counter.increment();
```