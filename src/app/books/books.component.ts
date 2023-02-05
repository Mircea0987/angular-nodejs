import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Book } from './interface/interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private httpService: HttpService) {}

  books: Book[];

  ngOnInit() {
    this.httpService.get().subscribe((book) => {
      this.books = book;
    });
  }
}
