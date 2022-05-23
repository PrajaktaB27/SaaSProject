import { Component, OnInit } from '@angular/core';
import { MetadetectorApiService } from 'src/app/metadetector-api.service';
import { TileModel } from 'src/app/_models/TileModel';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit {
  listOfEstates: TileModel[] = [];
  static tileType: string = 'unowned'
  tilesPerSlide: number = 5;

  constructor(private api: MetadetectorApiService) { }

  ngOnInit(): void {
    this.api.getUniqueTiles().subscribe( (result: TileModel[]) => {
      console.log(result);
      this.listOfEstates = result;
    });
  }

  getEstateDetails(): TileModel[] {
    return this.listOfEstates;
  }

  getEstateMap(estateId: number) {
    return `https://api.decentraland.org/v1/estates/${estateId}/map.png`;
  }

}
