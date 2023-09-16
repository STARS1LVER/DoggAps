import { Component, OnInit } from '@angular/core';
import { DogsAppService } from '../../services/dogs.service';
import { Dog, Race } from '../../interfaces/dogs-breeds.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'dogs-form',
  templateUrl: './dogs-form.component.html',
  styleUrls: ['./dogs-form.component.css'],
})
export class DogsFormComponent implements OnInit {
  public races: Race = {};

  public listRaces:Dog[] = []

  public dataForm: FormGroup = this.formB.group({
    id: [0],
    raza: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
  });

  constructor(
    public dogService: DogsAppService,
    private formB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getLocalStorageS()


  }



  get obtenerDatos(): Dog {
    const datos = this.dataForm.value as Dog;
    datos.id = this.dogService.generarNumeroAlAzar.toString();
    return datos;
  }

  public onSubmit() {
    if (this.dataForm.invalid) return;

    if( this.listRaces.length === 0){
      this.dogService.addDog(this.obtenerDatos);
    }


    this.route.navigateByUrl('/dogs/table-dogs');
  }

  public getLocalStorageS() {
    this.races = this.dogService.getInfoLocal();
  }

 

}
