import { Component } from '@angular/core';
import { MyNewServiceService } from './my-new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  friends[]: MyNewServiceService;
  constructor(private _MyNewServiceService: MyNewServiceService) {
    this.friends = this._MyNewServiceService.getFriends();
  }
}
