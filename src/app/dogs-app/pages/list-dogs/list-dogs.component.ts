import { Component, OnInit } from '@angular/core';
import { DogsAppService } from '../../services/dogs.service';
import { Dog, Race } from '../../interfaces/dogs-breeds.interface';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-list-dogs',
  templateUrl: './list-dogs.component.html',
  styleUrls: ['./list-dogs.component.css']
})
export class ListDogsComponent implements OnInit {

  public races:Race = {}

  public listRaces:Dog[] = []

  public name!: string

  public date = new Date().getFullYear()

  constructor(
    private dogService:DogsAppService,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.getInfoToLocal()

    console.log(this.date)

    this.activatedRoute.params
    .pipe(
      tap(({raza}) => this.name = raza),
      switchMap(({raza}) => this.dogService.getBreedsByName(raza)  )
    ).subscribe( data => {

        this.listRaces.push(data)
        console.log('hola',this.listRaces)
      }

    )


  }


  public getInfoToLocal(){
    this.races = this.dogService.getInfoLocal()
  }


  public deleteDogs(){

    for(const data of this.listRaces){
      this.dogService.deleteDog(data)
      break
    }
  }







}


