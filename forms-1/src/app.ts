import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { MyApp } from './app/app.component';

bootstrap(MyApp, [
    disableDeprecatedForms(),
    provideForms()
]);
