import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './Modules/AppModule/AppModule';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
