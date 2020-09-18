import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { VisitorComponent } from './visitor/visitor.component';
import { ListComponent } from './list/list.component';
import { NewsComponent } from './news/news.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'visitor', component: VisitorComponent },
  { path: 'detail', component: ListComponent },
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: '/visitor', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class AppRoutingModule { }
