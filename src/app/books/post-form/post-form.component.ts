import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  productform!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public postService: HttpService
  ) {}
  ngOnInit() {
    this.productform = this.formBuilder.group({
      idProducts: [''],
      ProductsName: [''],
      ProductsPrice: [''],
      ProductsImage: [''],
      ProductsDescription: [''],
    });
  }

  submitProductForm() {
    console.log(this.productform.value);
    this.postService.post(this.productform.value).subscribe((data) => {
      console.log(data);
    });
    this.productform.reset();
  }
}
