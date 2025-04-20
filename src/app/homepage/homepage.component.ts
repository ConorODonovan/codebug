import { Component } from '@angular/core';
import { TopToolbarComponent } from "../top-toolbar/top-toolbar.component";
import { HomepageButtonComponent } from "../homepage-button/homepage-button.component";

@Component({
  selector: 'app-homepage',
  imports: [TopToolbarComponent, HomepageButtonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  testMethod() {
    console.log("Button clicked!");
  }
}
