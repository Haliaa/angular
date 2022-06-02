import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./users-component/users/users.component";
import {UserDetailsComponent} from "./users-component/user-details/user-details.component";
import {UsersResolver} from "./users-services/resolvers/users.resolver";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UserGuard} from "./users-services/guards/user.guard";

const routes: Routes = [
  {
    path:'', component:UsersComponent,
    resolve:{usersData:UsersResolver},
    canDeactivate:[UserGuard],
    canActivate:[UserGuard],
    children:[
      {path:':id', component:UserDetailsComponent, resolve:{userData:UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule, HttpClientModule]
})
export class UsersRoutingModule { }
