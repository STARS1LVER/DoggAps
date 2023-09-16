import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { TableDogsComponent } from './pages/table-dogs/table-dogs.component';
import { RegisterDogsComponent } from './pages/register-dogs/register-dogs.component';
import { ListDogsComponent } from './pages/list-dogs/list-dogs.component';
import { EditDogsComponent } from './pages/edit-dogs/edit-dogs.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'table-dogs', component: TableDogsComponent},
      { path: 'register-dogs', component: RegisterDogsComponent},
      { path: 'list-dogs/:raza', component: ListDogsComponent},
      { path: 'edit/:id', component: EditDogsComponent },
      { path: '**', redirectTo: 'table-dogs' },
    ]
  }

]











@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DogsRoutingModule { }

