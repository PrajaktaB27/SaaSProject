import { Component, OnInit } from '@angular/core';
import { MetadetectorApiService } from 'src/app/metadetector-api.service';
import { TileModel } from 'src/app/_models/TileModel';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.css']
})
export class SoldComponent implements OnInit {

  listOfTileLists: Array<TileModel[]> = [];
  static tileType: string = 'district'; // change once we get tiles with type=owned in DB
  //static tileType: string = 'owned'

  constructor(private metaApiService: MetadetectorApiService) { }

  ngOnInit(): void {
    this.metaApiService.getTileByType(SoldComponent.tileType).subscribe( (result: TileModel[]) => {
      for (var i = 0; i < result.length; i++) {
        if (i % 3 == 0) {
          this.listOfTileLists.push([] as TileModel[]);
        }
        
        this.listOfTileLists[this.listOfTileLists.length - 1].push(result[i]);
      }
      console.log(this.listOfTileLists);
    });
  }

}
