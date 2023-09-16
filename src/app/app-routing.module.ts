import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'dogs',
      loadChildren: () => import('./dogs-app/dogs-app.module'). then( modulo => modulo.DogsAppModule )
    },
    {
      path: '',
      redirectTo: 'dogs',
      pathMatch: 'full'
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
