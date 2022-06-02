import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-component/users/users.component';
import {UserDataService} from "./users-services/user-data.service";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './users-component/user/user.component';
import { UserDetailsComponent } from './users-component/user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserDataService
  ]
})
export class UsersModule {
}
