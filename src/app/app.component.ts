import {Component} from '@angular/core';
import {SubscriberService} from './subscriber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;

  constructor(private _subsService: SubscriberService) {
  }

  querySubmit(event: Event): void {
    console.log(this.email);
    this._subsService.addUser(this.email);
  }
}
