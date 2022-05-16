import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest } from '@angular/common/http';
import { TweetModel } from './_models/TweetModel';
@Injectable({
  providedIn: 'root'
})
export class MetadetectorApiService {
  hostUrl : string = 'http://localhost:8080/app/';

  constructor(private http: HttpClient) { }

  getTweets(){
    return this.http.get<TweetModel[]>(this.hostUrl + 'tweets');
  }
}
