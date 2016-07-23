import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { MyApp } from './app/app.component';

bootstrap(MyApp, [
    HTTP_PROVIDERS
]);
