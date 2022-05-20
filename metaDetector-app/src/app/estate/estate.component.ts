import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetadetectorApiService } from 'src/app/metadetector-api.service';
import { TileModel } from 'src/app/_models/TileModel';
import { Location } from '@angular/common'

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})

export class EstateComponent implements OnInit {

  estateId: string = '';
  tiles: Array<TileModel> = [];
  contractAddress: string = '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d';

  constructor(private route: ActivatedRoute, private metaApiService: MetadetectorApiService, private location: Location) { }

  ngOnInit(): void {
    this.estateId = this.route.snapshot.paramMap.get('estateId')!;

    this.metaApiService.getAllTilesInEstate(this.estateId).subscribe( (result: TileModel[]) => {
      this.tiles = result;
      console.log('result: ' + JSON.stringify(this.tiles));
    });
  }

  getTileMap(tileId: string) : string {
    let coordinates: string[] = tileId.split(',', 2);

    return `https://api.decentraland.org/v1/parcels/${coordinates[0]}/${coordinates[1]}/map.png`;
  }

  goToMarketPlace(tokenId: string) : string {
    return `https://market.decentraland.org/contracts/${this.contractAddress}/tokens/${tokenId}`;
  }

  goBack() {
    this.location.back();
  }

}
