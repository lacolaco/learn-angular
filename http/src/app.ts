import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { MyApp } from './app/app.component';

import { DataService } from './app/data.service';

bootstrap(MyApp, [
    HTTP_PROVIDERS,
    DataService
]);
