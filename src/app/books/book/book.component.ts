import { Component, Input } from '@angular/core';
import { Book } from '../interface/interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book;
}
