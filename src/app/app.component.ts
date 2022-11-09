import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form';
  allowBtn = false;
  genders = ['مرد', 'زن'];
  submited = false;

  signupForm !: FormGroup;

  disableTextbox = true;

  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }


  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
    })
  }

  constructor() { }

  onSubmit() {
    console.log(this.signupForm);
    if (!this.signupForm.valid) {
      return alert('فرم را کامل کنید')
    }
    this.submited = true
  }

  // updateGender(event: any) {
  //   this.gender = event.target.value
  // }

  resultBtn() {
    this.allowBtn = !this.allowBtn;
  }

  getDisplay() {
    return this.allowBtn === true ? 'flex' : 'none'
  }


}
