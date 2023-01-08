import { Component } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  template: `<mat-slide-toggle>Toggle me!</mat-slide-toggle>`,
  imports: [NgSwitch, RouterOutlet, MatSlideToggleModule],
  standalone: true,
})
export class AppComponent {
  title = 'angular-vite-demo-test';
}
