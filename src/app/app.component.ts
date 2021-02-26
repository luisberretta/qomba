import {Component, HostListener, ViewChild} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
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
  redireccion: string;
  @ViewChild('template', {static: true}) modalTemplate;

  constructor(private ngxLoader: NgxUiLoaderService, private modalService: NgbModal, private location: Location, private router: Router) {

    this.router.events.pipe(filter((event: NavigationStart) =>
      event.navigationTrigger === 'popstate')).subscribe((e) => {
      if(this.router.url == '/futbol') {
        this.redireccion = e.url;
        this.router.navigateByUrl(this.router.url);
        this.location.go(this.router.url);
        this.abrirModal();
      }
    });
  }

  ngOnInit() {
    this.ngxLoader.start();
    this.ngxLoader.stop();
  }

  abrirModal() {
    this.modalRef = this.modalService.open(this.modalTemplate, {centered: true});
  }

  confirmarYRedireccionar() {
    this.modalService.dismissAll();
    this.router.navigateByUrl(this.redireccion);
  }
}
