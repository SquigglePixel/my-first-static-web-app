import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.scss'
  ]
})
export class AppComponent implements OnInit {

  public title = 'sonoran';

  constructor(
    router: Router
    ) {

   
    }

  public async ngOnInit() {
  }

}

