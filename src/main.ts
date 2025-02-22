import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { myInterceptorInterceptor } from './app/services/token/my-interceptor.interceptor';

export const appConfigs = {
    providers: [
      provideHttpClient(withInterceptors([myInterceptorInterceptor])), // Add HTTP client and interceptors
    ],
  };

bootstrapApplication(AppComponent, appConfig,).catch((err) => console.error(err));
