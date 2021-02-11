import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginRestoComponent } from './login-resto/login-resto.component';
import { RegisterRestoComponent } from './register-resto/register-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  {
    component: AddRestoComponent,
    path: 'add',
  },

  {
    component: LoginRestoComponent,
    path: 'login',
  },
  { path: 'update/:id', component: UpdateRestoComponent },
  { path: 'register', component: RegisterRestoComponent },
  { component: ListRestoComponent, path: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
