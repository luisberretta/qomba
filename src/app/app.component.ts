import {Component, HostListener, ViewChild} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LocationStrategy, PlatformLocation} from "@angular/common";
import {NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modalRef: NgbModalRef;
  modalText: string;
  @ViewChild('template', {static: true}) modalTemplate;

  constructor(private ngxLoader: NgxUiLoaderService, private modalService: NgbModal, private location: Location, private router: Router) {
    // location.onPopState((e) => {
    //
    //   console.log(e);
    //   alert("Recordá que s");
    // });
    // window.onpopstate = function(e)
    // {
    //     e.stopPropagation();
    //     // history.go(1);
    // }
    // this.router.events
    //   .pipe(filter((event: NavigationStart) =>
    //     event.navigationTrigger === 'popstate')).subscribe((e) => {
    //       console.log(e);
    //     this.router.navigateByUrl(this.router.url);
    //     this.location.go(this.router.url);
    //   });
  }

  ngOnInit() {
    this.ngxLoader.start();
    this.ngxLoader.stop();
  }

  // abrirModal() {
  //   this.modalRef = this.modalService.open(this.modalTemplate, {centered: true});
  // }
  //
  // cerrar() {
  //   this.modalService.dismissAll();
  //
  // }
}
