import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './modules/photos/photos.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';

import { RouterModule, Routes }from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes = [
  {path: '', redirectTo: '/photos', pathMatch: 'full'},
  {path: 'photos', component: PhotosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatChipsModule,
    RouterModule.forRoot(      
      routes
    ),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
