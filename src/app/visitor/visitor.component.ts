import { Component, OnInit, Output } from '@angular/core';
import { Visitor } from './visitor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {
  visitorForm: FormGroup;
  user: any = {};

  myDate = Date.now();

  visit: Visitor[] = [
    {id: 1, vis: 'Meeting'},
    {id: 2, vis: 'Delivery'},
    {id: 3, vis: 'Person'}
  ];

  createVisitoreForm() {
    this.visitorForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      type: ['', [Validators.required]],
      person: ['', [Validators.required]],
      date: [''],
      entry: ['', [Validators.required]],
      exit: ['', [Validators.required]]
    });
  }

  get name() {
    return this.visitorForm.get('name') as FormControl;
  }

  get email() {
    return this.visitorForm.get('email') as FormControl;
  }

  get type() {
    return this.visitorForm.get('type') as FormControl;
  }

  get person() {
    return this.visitorForm.get('person') as FormControl;
  }

  get date() {
    return this.visitorForm.get('date') as FormControl;
  }

  get entry() {
    return this.visitorForm.get('entry') as FormControl;
  }

  get exit() {
    return this.visitorForm.get('exit') as FormControl;
  }

  public onSubmit(data): void {
    console.log(this.visitorForm.value);
    this.http.post('http://localhost:4200/detail', data).subscribe((result) => {
      console.warn('result', result);
    });
    this.user = Object.assign(this.user, this.visitorForm.value);
    localStorage.setItem('Users', JSON.stringify(this.user));
  }

  constructor(public fb: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.createVisitoreForm();
  }

}
