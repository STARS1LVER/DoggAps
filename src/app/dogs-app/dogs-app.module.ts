import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { TableDogsComponent } from './pages/table-dogs/table-dogs.component';
import { RegisterDogsComponent } from './pages/register-dogs/register-dogs.component';
import { ListDogsComponent } from './pages/list-dogs/list-dogs.component';
import { EditDogsComponent } from './pages/edit-dogs/edit-dogs.component';
import { DogsRoutingModule } from './dogs-routing.module';
import { MaterialModule } from '../material/material.module';
import { DogsFormComponent } from './components/dogs-form/dogs-form.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    TableDogsComponent,
    RegisterDogsComponent,
    ListDogsComponent,
    EditDogsComponent,
    DogsFormComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    MaterialModule
  ]
})
export class DogsAppModule { }
