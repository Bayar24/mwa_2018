import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student.component';
import { ProfileComponent } from './profile.component';
import { MyGuard } from './my.guard';
import { NotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
