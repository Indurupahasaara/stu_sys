import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LecServiceService } from '../services/lec-service.service';
import { StudentService } from '../services/student.service';

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
  isUpdate: boolean = false;

  get f() {
    return this.lec_regForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private lecservice: LecServiceService
  ){

  }
  ngOnInit(): void {
    this.loading$=this.asObservable();
    this.initForm();
  }

  initForm(): void {
    this.lec_regForm = this['fb'].group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactNo: ['', [Validators.required],Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      id: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      course: ['', [Validators.required]],
      address: ['', [Validators.required]],
      education: ['', [Validators.required]]
    });
  }




  Onsubmit(): void {
    this.studentService.create(this.lec_regForm.value).subscribe(() => {
      console.log("Record Inserted");
    })
    this.submitted = true;
    if (this.lec_regForm.valid) {
      console.log(this.lec_regForm.value);
    }
    console.log("akaalffm");
    
  }

  clearForm(): void {
    this.submitted = false;
    this.lec_regForm.clearValidators;
    this.lec_regForm.reset;
  }

}