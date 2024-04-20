import { Component } from '@angular/core';

@Component({
  selector: 'gails-content-layout',
  template: `
    <!--
    <gails-header-main">
      <gails-menu-main></acb-alcon-menu-main>
    </gails-header-main>
    <div class="gails-page"">
      <div class="acb-header-shadow"></div>
      <div class="gails-main-content">
        <router-outlet></router-outlet>
      </div>
      <gails-footer-main></gails-footer-main>
    </div>
    -->
    `,
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {

  constructor(  ) {  }

}
