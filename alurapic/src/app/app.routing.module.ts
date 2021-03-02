import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { SignUpComponent } from './home/signup/signup.component';


const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'user/:userName', component: PhotoListComponent, resolve: { photos: PhotoListResolver} },
  { path: 'p/add', component: PhotoListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]

})
export class AppRoutingModule {

}
