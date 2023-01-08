// import "@angular/compiler";
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import './styles.css';

const appRoutes: Routes = [];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]
});
