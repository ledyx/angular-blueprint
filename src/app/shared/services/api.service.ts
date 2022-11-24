import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpGateway as HttpGateway } from './http.gateway';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpGateway {

  constructor(http: HttpClient) {
    super(http);
  }

  get baseUrl(): any {
    return environment.apiUrl;
  }
}
