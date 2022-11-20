import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class HttpGateway {
    constructor(protected http: HttpClient) { }

    abstract get baseUrl(): any;

    get<T>(endPoint: string): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${endPoint}`)
    }

    post<T>(endPoint: string, body: any): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}${endPoint}`, body)
    }

    put<T>(endPoint: string, body: any): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}${endPoint}`, body)
    }

    delete<T>(endPoint: string): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}${endPoint}`)
    }
}
