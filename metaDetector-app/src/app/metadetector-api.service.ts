import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetadetectorApiService {
  hostUrl : string = 'http://localhost:8080/app/';

  constructor(private http: HttpClient) { }

}
