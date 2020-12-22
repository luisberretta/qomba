import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private baseUrl: string = environment.url;

  constructor(private httpApiService: HttpClient) {
  }

  crearPedido(asd: FormData): Observable<any> {
    return this.httpApiService.post<FormData>(this.baseUrl + '/pedido', asd).pipe(map(result => result));
  }

}
