import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentComponent } from './student.component';
import { ProfileComponent } from './profile.component';
import { NotFoundComponent } from './not-found.component';

import { MyGuard } from './my.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent},
  { path: 'profile/:id', component: ProfileComponent, canActivate: [MyGuard] },
  { path: 'error', component: NotFoundComponent },
  { path: '**', component: HomeComponent },
  
]


/**
 * re-export the Angular RouterModule by adding it to the module exports array. 
 * By re-exporting the RouterModule here and importing AppRoutingModule in AppModule, 
 * the components declared in AppModule will have access to router directives such as RouterLink and RouterOutlet.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
