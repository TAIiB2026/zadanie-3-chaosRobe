import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitListComponent } from './fruit-list/fruit-list.component';

const routes: Routes = [

{ path: 'owoce', component: FruitListComponent },


{ path: '', redirectTo: '/owoce', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
