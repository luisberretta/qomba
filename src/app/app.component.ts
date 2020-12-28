import { Component } from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ngxLoader: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.ngxLoader.start();
    this.ngxLoader.stop();
  }
}
