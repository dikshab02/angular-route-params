import { Component } from '@angular/core';
import { LockService } from './lock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-route-project';

  constructor(public lockService: LockService) {}
  clickBlock() {
    // window.location.href = "http://localhost:4200/employee";
    this.lockService.flag = false;
  }
  clickUnblock() {
    // window.location.href = "http://localhost:4200/employee";
    this.lockService.flag = true;
  }
}
