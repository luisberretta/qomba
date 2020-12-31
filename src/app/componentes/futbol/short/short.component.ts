import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {} from "events";

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit {

  @Output() proximoPaso = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  siguiente(){
    this.proximoPaso.emit(undefined);
  }

}
