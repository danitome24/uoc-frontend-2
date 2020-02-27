import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  private api: ApiService;

  constructor(api: ApiService) {
    this.api = api;
  }

  ngOnInit() {
    /*this.api.getUsers().subscribe(data => {
      data.forEach(a => {
        console.log(a);
      });
    });*/

    this.api.getUserById(1).subscribe(data => {
      console.log(data);
    });
  }

}
