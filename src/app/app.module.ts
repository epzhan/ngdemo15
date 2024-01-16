import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartupService } from './core/services/startup.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { WaveformModule } from './waveform/waveform.module';
import { LoaderComponent } from './core/components/loader/loader.component';
import { LoaderInterceptor } from './core/interceptor/loader.interceptor';

export function initApp(service: StartupService) {
  return () => service.getConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    HeaderModule,
    AboutModule,
    EmployeeModule,
    WaveformModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [StartupService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
