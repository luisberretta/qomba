import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss']
})
export class CamisetaComponent implements OnInit {

  @ViewChild('archivoEscudo') fileInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile() {
    this.fileInput.nativeElement.click();
  }

}
