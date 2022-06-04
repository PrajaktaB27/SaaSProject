import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest } from '@angular/common/http';
import { TweetModel } from './_models/TweetModel';
import { TileModel } from './_models/TileModel';

@Injectable({
  providedIn: 'root'
})
export class MetadetectorApiService {
   hostUrl : string = 'https://metadetector.azurewebsites.net/app/';
   // hostUrl : string = 'http://localhost:8080/app/';

  constructor(private http: HttpClient) { }

  getTweets(){
    return this.http.get<TweetModel[]>(this.hostUrl + 'tweets');
  }

  getTileByType(typeValue: string) {
    return this.http.get<TileModel[]>(this.hostUrl + 'tile/type/' + typeValue);
  }

  getAllTiles() {
    return this.http.get<TileModel[]>(this.hostUrl + 'allTiles');
  }

  getEstateByType(typeValue: string) {
    return this.http.get<number[]>(this.hostUrl + 'estates/type/' + typeValue);
  }

  getAllTilesInEstate(estateId: string) {
    return this.http.get<TileModel[]>(this.hostUrl + 'tile/estate/' + estateId);
  }
}
