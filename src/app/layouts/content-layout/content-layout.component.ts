import { Component } from '@angular/core';

@Component({
  selector: 'gails-content-layout',
  template: `
  <div class="main">
  <header class="header">
      <div class="header-top-border"></div>
      <div class="header-content-warpper">
          <div class="header-content">
              <img class="banner-logo" src="assets/logo.svg" height="130px"/>
              <div class="banner-patch-wrapper">
                  <img class="banner-patch" src="assets/patch.svg" height="216px"/>
              </div>
              <div class="banner-menu">
                  <ul>
                      <li><a href="#">Adventures</a>
                          <ul>
                              <li href="#">Packrafting
                              <li href="#">Fly/Tenkara Fishing</li>
                              <li href="#">Llama Handling</li>
                              <li href="#">Spike Camps</li>
                              <li href="#">Disc Golf</li>
                          </ul>
                      </li>
                      <li class="link"><a href="#" >Courses</a></li>
                      <li class="link"><a href="#" >Videos</a></li>
                      <li class="link"><a href="#" >Rentals</a></li>
                      <li class="link"><a href="#" >Events</a></li>
                      <li class="link"><a href="#" >Campground</a></li>
                      <li class="link"><a href="#" >River Access</a></li>
                      <li class="link"><a href="#" >Shuttles</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="header-bottom-border"></div>
  </header>
  <div class="content">
    <router-outlet></router-outlet>
  </div>
  <footer class="footer">
  </footer>
</div>
`,
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {

  constructor(  ) {  }

}
