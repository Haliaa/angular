import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users-component/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UserDetailsComponent} from "./users-component/user-details/user-details.component";

const routes: Routes = [
  {path:'', component:UsersComponent, children:[
      {path:':id', component:UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule, HttpClientModule]
})
export class UsersRoutingModule { }
