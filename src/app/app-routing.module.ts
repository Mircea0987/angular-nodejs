import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { PostFormComponent } from './books/post-form/post-form.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'product', component: BooksComponent },
  { path: 'create', component: PostFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
