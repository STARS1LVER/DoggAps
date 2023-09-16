import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environments } from 'environments/environments';
import { Observable, map, race } from 'rxjs';
import { Breeds } from '../interfaces/dogs.interface';
import { BreedsImages } from '../interfaces/dogs-images.interfaces';
import { Dog, Race,  } from '../interfaces/dogs-breeds.interface';

@Injectable({providedIn: 'root'})

export class DogsAppService {

  // Properties:
  private baseUrl: string = environments.baseUrl
  private baseUrl2: string = environments.baseUrl2
  public races: Race = {}

  constructor( private http: HttpClient ) { }


  public getBreeds(): Observable<Breeds>{
    return this.http.get<Breeds>(`${this.baseUrl}list/all`)
  }

  public getBreedsListImage( breed: string ): Observable<string>{
    return this.http.get<BreedsImages>(`${this.baseUrl2}${breed}/images/random`)
    .pipe(
      map(respuesta => respuesta.message)
    )
  }


  get generarNumeroAlAzar(): number {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }


  public getObjectRace() {
   this.getBreeds().
    pipe(
      map( races => {
        for(const raza in races.message){
          this.races[raza] = []
        }
      })
    ).subscribe(
      data => localStorage.setItem('races', JSON.stringify(this.races) )
    )
  }


  public getInfoLocal(): Race {
   let local =  localStorage.getItem('races');

   if( local === null) {
    console.log('Hay un error')
    return {} as Race

    }
    return this.races = JSON.parse(local) as Race
  }

  public addDog(dogs: Dog){

    this.getInfoLocal()

    this.races[dogs.raza].push(dogs)

    this.saveChangesLocal(this.races)

  }

  public deleteDog(dogs:Dog){

    this.getInfoLocal()

    this.races[dogs.raza].splice(this.races[dogs.raza].findIndex((item)=> item.id === dogs.id),1)

    this.saveChangesLocal(this.races)


  }

  public infoDogById(dogs:Dog){
    this.getInfoLocal()

    let info = this.races[dogs.raza].find(objeto => objeto.id === dogs.id)
    console.log(info)
    return info

  }


  public saveChangesLocal(nuevo: Race){
    localStorage.setItem('races', JSON.stringify(nuevo) )
  }


  public callApi(){
    return localStorage.getItem('races') === null
  }

  public getBreedsByName(name:string){
    return this.races[name]
  }





}
