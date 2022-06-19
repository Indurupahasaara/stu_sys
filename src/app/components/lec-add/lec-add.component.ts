import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lec-add',
  templateUrl: './lec-add.component.html',
  styleUrls: ['./lec-add.component.css']
})
export class LecAddComponent implements OnInit {
  [x: string]: any;

  submitted: boolean = false;
  lecList: any[] = [];
  lec_regForm!: FormGroup;
  isUpdate:boolean=false;

  get f() {
    return this.lec_regForm.controls;
  }

  initForm(): void {
    this.lec_regForm = this['fb'].group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      id: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      course: ['', [Validators.required]],
      address: ['', [Validators.required]],
      education: ['', [Validators.required]]
    });
  }



  ngOnInit(): void {

  }
  clearForm(): void {
    this.submitted = false;
    this.lec_regForm.clearValidators;
    this.lec_regForm.reset;
  }

  Onsubmit(): void {
    this.submitted = true;
    if (this.lec_regForm.valid) {
      console.log(this.lec_regForm.value);
    }
  }
}