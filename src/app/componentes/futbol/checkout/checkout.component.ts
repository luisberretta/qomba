import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WizardService} from "../wizard.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private wisardService: WizardService) {
  }

  ngOnInit(): void {

  }

  uploadFile(event) {
    let fileList: FileList = event.target.files;
    let formData: FormData = new FormData();
    if (fileList.length > 0) {
      let file: File = fileList[0];
      formData.append('file', file, file.name);
    }
    let equipo = [
      {nombre: "lucho", numero: 9, talleCamiseta: "L", talleShort: "L"},
      {nombre: "luis", numero: 7, talleCamiseta: "M", talleShort: "M"}
    ]
    formData.append('equipo', JSON.stringify(equipo));

    this.wisardService.crearPedido(formData).subscribe(data => {
      console.log(data);
    })

  }

}
