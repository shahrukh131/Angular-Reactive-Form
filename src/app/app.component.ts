import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'my-angular-project';
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      street: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null),
      
    })
  }
}
