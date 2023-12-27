import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartupService } from './core/services/startup.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeDetailModule } from './employee-detail/employee-detail.module';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from './header/header.module';

export function initApp(service: StartupService) {
  return () => service.getConfig();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    AboutModule,
    EmployeeModule,
    EmployeeDetailModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [StartupService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
