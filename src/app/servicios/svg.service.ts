import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SvgService {


  constructor(private httpApiService: HttpClient) {
  }

  obtenerSVGCamiseta(url): Observable<any> {
    return this.httpApiService.get(url, {responseType:'text'}).pipe(map(result => result));
  }

  obtenerSVGShort(url): Observable<any> {
    return this.httpApiService.get(url, {responseType:'text'}).pipe(map(result => result));
  }
  obtenerSVGlogo(): Observable<any> {
    return this.httpApiService.get("/assets/images/logo.svg", {responseType:'text'}).pipe(map(result => result));
  }

}
