import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolveService} from "./services";
import {MyGuardGuard} from "./guards";

const routes: Routes = [
    {path:'',component:CommentsComponent, canActivate:[MyGuardGuard],//canActivate:[MyGuardGuard]- питає при переході на comments
      children:[
      {path:':id', component:CommentDetailsComponent,
        // canActivate:[MyGuardGuard], //canActivate:[MyGuardGuard]- питає при переході на comment
        resolve:{data:CommentResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
