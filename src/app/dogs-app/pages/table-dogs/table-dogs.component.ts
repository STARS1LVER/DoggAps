import { Component, OnInit } from '@angular/core';
import { DogsAppService } from '../../services/dogs.service';
import { Breeds } from '../../interfaces/dogs.interface';
import { Race } from '../../interfaces/dogs-breeds.interface';
import { race } from 'rxjs';

@Component({
  selector: 'app-table-dogs',
  templateUrl: './table-dogs.component.html',
  styleUrls: ['./table-dogs.component.css'],
})
export class TableDogsComponent implements OnInit {



  public visibility: boolean = true;

  public breedImages: { [key: string]: { url: string; visible: boolean } } = {};

  public races: Race = {}


  constructor(private dogService: DogsAppService) {}


  ngOnInit(): void {
    this.getLocalStorageS()

  }

  public getBreedsImages(breed: string) {
    this.dogService.getBreedsListImage(breed).subscribe((images) => {
      this.breedImages[breed] = { url: images, visible: true };
      this.visibility = false;
      console.log(this.breedImages);



    });
  }

  public toggleImageVisibility(breed: string) {
    if (!this.breedImages[breed]) {
      this.getBreedsImages(breed);
    } else {
      this.breedImages[breed].visible = !this.breedImages[breed].visible;
    }
  }





  public getLocalStorageS(){
     this.races =  this.dogService.getInfoLocal()
  }


  public getRaces(name:string){
    console.log(name)
  }



}
