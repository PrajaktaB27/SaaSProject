import { Component, OnInit, Input } from '@angular/core';
import { MetadetectorApiService } from 'src/app/metadetector-api.service';
import { TileModel } from 'src/app/_models/TileModel';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css'],
})
export class EstateListComponent implements OnInit {

  @Input() public tileType: string = '';
  listOfEstateLists: Array<TileModel[]> = [];
  listOfUniqueEstateIds: number[] = [];
  estatesPerSlide: number = 4;
  title: string = '';

  constructor(private metaApiService: MetadetectorApiService) {}

  ngOnInit(): void {
    this.title = this.getTitle();

    this.metaApiService
      .getTileByType(this.tileType)
      .subscribe((result: TileModel[]) => {
        console.log("All tiles of type: " + this.tileType);
        console.log(result);

        for (let i = 0; i < result.length; i++) {
          let estateID: number = result[i].estateId;

          if (!this.listOfUniqueEstateIds.includes(estateID)) {
            this.listOfUniqueEstateIds.push(estateID);
            let numberOfUniqueEstates = this.listOfUniqueEstateIds.length;

            // Create a new slide for the carousel
            if ((numberOfUniqueEstates - 1) % this.estatesPerSlide == 0) {
              this.listOfEstateLists.push([] as TileModel[]);
            }
            
            // Add the estate to the current slide
            let currentSlideIdx = this.listOfEstateLists.length - 1;
            this.listOfEstateLists[currentSlideIdx].push(result[i]);
          }
        }

        console.log("Unique estates of type: " + this.tileType);
        console.log(this.listOfEstateLists);
      });
  }

  getTitle() {
    return this.tileType == "owned" ? "Sold or Owned" : "For Sale";
  }

  getEstateMap(estateId: number) {
    return `https://api.decentraland.org/v1/estates/${estateId}/map.png`;
  }

  convertToFormattedDate(timestamp: number): string {
    let dateObj = new Date(timestamp * 1000);
    return dateObj.toDateString();
  }
}
