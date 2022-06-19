import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-stu-reg',
  templateUrl: './stu-reg.component.html',
  styleUrls: ['./stu-reg.component.css']
})
export class StuRegComponent implements OnInit {
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> | undefined;
  submitted: boolean = false;
  studentList: any[] = [];

  stu_regForm!: FormGroup;
  stuList: any[] = [];
  isUpdate: boolean = false;
  // selectId:string | undefined;

  constructor(
    private fb: FormBuilder){}

  ngOnInit(): void {
    this.loading$=this.loading.asObservable();
    this.initForm();
    this.getList();

  }
  getList() {
    
  }

  initForm(): void {
    this.stu_regForm = this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required]],
      telephoneNo:['',[Validators.required]],
      id:['',[Validators.required]],
      gender:['',[Validators.required]],
      course:['',[Validators.required]],
      Address:['',[Validators.required]],
    })
  }
  clearForm(): void {
    this.submitted = false;
    this.stu_regForm.clearValidators;

  }

  Onsubmit(): void {
    this.submitted = true;
    if (this.stu_regForm.valid) {
      console.log(this.stu_regForm.value);
    }
  }
}

