import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { distinct } from 'rxjs';
import { MetadetectorApiService } from 'src/app/metadetector-api.service';
import { TileModel } from 'src/app/_models/TileModel';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit {
  listOfEstates: TileModel[] = [];
  listOfUniqueEstateIds: number[] = [];
  static tileType: string = 'unowned'
  tilesPerSlide: number = 5;
  activeCard: number = 0;

  constructor(private api: MetadetectorApiService) { }

  ngOnInit(): void {
    this.api.getAllTiles().subscribe((result: TileModel[]) => {

      console.log(result);
      // Filter the list of estates to only show unowned estates
      this.listOfEstates = result.filter(result => result.type == ForSaleComponent.tileType);
    });

    let tempArr: TileModel[] = [];

    // create a unique list of estates based on estateIDs
    for (let i = 0; i < this.listOfEstates.length; i++) {
      let estateID: number = this.listOfEstates[i].estateId;
      this.listOfUniqueEstateIds[i] = estateID;

      if (!this.listOfUniqueEstateIds.includes(estateID)) {
        tempArr[i] = this.listOfEstates[i];
      }
    }

    this.listOfEstates = tempArr;
    console.log(this.listOfEstates)
  }

  getEstateDetails(): TileModel[] {
    return this.listOfEstates;
  }

  getEstateMap(estateId: number) {
    return `https://api.decentraland.org/v1/estates/${estateId}/map.png`;
  }

}
