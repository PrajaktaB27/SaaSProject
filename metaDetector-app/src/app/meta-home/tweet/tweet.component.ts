import { Component, OnInit } from '@angular/core';
import { TweetModel } from 'src/app/_models/TweetModel';
import { MetadetectorApiService } from 'src/app/metadetector-api.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  results : Array<TweetModel>= [];
  counter(i: number){
    return new Array(i);
  }
  index: number = 0;

  getTweet():TweetModel{
    if(this.index >= this.results.length){
      this.index = 0;
    }
    let i = this.index;
    this.index++;
    return this.results[i];
  }

  constructor(private MetaService: MetadetectorApiService) { }

  ngOnInit(): void {
    this.MetaService.getTweets().subscribe( (result: TweetModel[]) => {
      this.results = result;
      console.log('result: ' + JSON.stringify(this.results));
    });
  }

}
