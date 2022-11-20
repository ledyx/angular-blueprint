import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiGateway } from './api-gateway';

@Injectable({
  providedIn: 'root'
})
export class HttpGatewayService extends ApiGateway {

  constructor(http: HttpClient) {
    super(http);
  }

  get baseUrl(): any {
    return "teest";
  }

}
