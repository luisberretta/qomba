import {Component, HostListener, ViewChild} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modalRef: NgbModalRef;
  modalText: string;
  @ViewChild('template', {static: true}) modalTemplate;

  constructor(private ngxLoader: NgxUiLoaderService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.ngxLoader.start();
    this.ngxLoader.stop();
    window.onbeforeunload = function() { return "Your work will be lost."; };
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    return false;
    // this.modalText = "Recordá que si regresas, deberás volver a comenzar."
    // this.abrirModal();
  }

  abrirModal() {
    this.modalRef = this.modalService.open(this.modalTemplate, {centered: true});
  }

  cerrar() {
    this.modalService.dismissAll();

  }
}
