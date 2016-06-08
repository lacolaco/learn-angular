import {Component} from '@angular/core';

@Component({
  selector: 'seed-app',
  templateUrl: 'app/seed-app.html',
  styleUrls: [
    'app/seed-app.css'
  ]
})
export class SeedApp {

  name = 'Angular';

  selected = 'X';

  personList = [
    {name: '太郎'},
    {name: '次郎'},
    {name: '三郎'},
  ];

}
