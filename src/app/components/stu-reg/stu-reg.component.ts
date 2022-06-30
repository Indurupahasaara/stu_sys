import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { StudentService } from '../services/student.service';

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

  get f() {
    return this.stu_regForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.loading$ = this.loading.asObservable();
    this.initForm();
    this.getList();

  }
  getList(): void {
    this.studentService.getAll().subscribe(res => {
      this.studentList = res;
    })
  }
  // validations
  initForm(): void {
    this.stu_regForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required]],
      id: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      course: ['', [Validators.required]],
      
    })
  }

  // To Submit
  Onsubmit(): void {
  
    this.submitted = true;
    console.log(this.stu_regForm.valid);
    if (this.stu_regForm.valid) {

      this.studentService.create(this.stu_regForm.value).subscribe(res => {
        console.log("Record Inserted");
      
      })
      console.log(this.stu_regForm.value);
    alert("Data Add succesfully");
    
    this.stu_regForm.reset();
    }

    console.log("alert"); 
  }
  // To delete
  onDelete(id: string): void {
    let isConfirm: boolean = confirm('Are You want to delete this record')
    if (isConfirm) {
      this.studentService.delete(id).subscribe(res => {
        console.log(res);
        // this.getList();

      });
    }
  }

  onUpdate(student: any): void {
    this.isUpdate = true;
    //  this.selectedId= student.id;

    this.stu_regForm.patchValue({

    })
  }

  // To cleare Form
  clearForm(): void {
    this.submitted = false;
    this.stu_regForm.clearValidators;

  }

}

