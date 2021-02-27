import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private baseUrl: string = environment.url;

  constructor(private httpApiService: HttpClient) {
  }

  generarPedido(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type','multipart/form-data');

    return this.httpApiService.post<FormData>(this.baseUrl + '/pedido', formData,{headers: headers}).pipe(map(result => result));
  }

}
