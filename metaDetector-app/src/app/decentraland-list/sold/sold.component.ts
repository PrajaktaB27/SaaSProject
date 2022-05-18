import { Component, OnInit } from '@angular/core';
import { MetadetectorApiService } from 'src/app/metadetector-api.service';
import { TileModel } from 'src/app/_models/TileModel';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.css']
})
export class SoldComponent implements OnInit {

  listOfEstateLists: Array<number[]> = [];
  //static tileType: string = 'district'; // change once we get tiles with type=owned in DB
  static tileType: string = 'owned'
  tilesPerSlide: number = 5;

  constructor(private metaApiService: MetadetectorApiService) { }

  ngOnInit(): void {
    this.metaApiService.getEstateByType(SoldComponent.tileType).subscribe( (result: number[]) => {
      for (var i = 0; i < result.length; i++) {
        if (i % this.tilesPerSlide == 0) {
          this.listOfEstateLists.push([] as number[]);
        }
        
        this.listOfEstateLists[this.listOfEstateLists.length - 1].push(result[i]);
      }
      console.log(this.listOfEstateLists);
    });
  }

  getFirstTileList(): number[] {
    return this.listOfEstateLists[0];
  }

  getEstateMap(estateId: number) {
    return `https://api.decentraland.org/v1/estates/${estateId}/map.png`;
  }


}
