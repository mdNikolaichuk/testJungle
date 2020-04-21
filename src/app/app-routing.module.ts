import { FavoriteComponent } from './repos/favorite/favorite.component';
import { ReposComponent } from './repos/repos.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'repos/:login', component: ReposComponent},
  {path: 'favorite', component: FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
