import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Pedido} from "../../clases/Pedido";

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private baseUrl: string = environment.url;

  constructor(private httpApiService: HttpClient) {
  }

  generarPedido(pedido: Pedido): Observable<any> {
    return this.httpApiService.post<FormData>(this.baseUrl + '/pedido', pedido).pipe(map(result => result));
  }

}
