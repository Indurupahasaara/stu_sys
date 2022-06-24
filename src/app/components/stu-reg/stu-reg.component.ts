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
    ){}

  ngOnInit(): void {
    this.loading$=this.loading.asObservable();
    this.initForm();
    this.getList();

  }
  getList() :void {
    this.studentService.getAll().subscribe(res=>{
      this.studentList=res;
    })
  }

  initForm(): void {
    this.stu_regForm = this.fb.group({
      fname:['',[Validators.required],Validators.pattern('^[A-Za-z_-]{2,20}$')],
      lname:['',[Validators.required],Validators.pattern('^[A-Za-z_-]{2,20}$')],
      email:['',[Validators.required,Validators.email]],
      telephoneNo:['',[Validators.required],Validators.maxLength(10),Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
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
    this.studentService.create(this.stu_regForm.value).subscribe(res=>{
      console.log("Record Inserted");
    })
    this.submitted = true;
    if (this.stu_regForm.valid) {
      console.log(this.stu_regForm.value);
      this.stu_regForm.clearValidators;
    }
    console.log("ABC")
  }

  onDelete(id: string): void {
    let isConfirm: boolean = confirm('Are You want to delete this record')
    if (isConfirm) {
     this.studentService.delete(id).subscribe(res =>{
       console.log(res);
       this.getList();
       
     });
    }
  }

  onUpdate(customer: any): void {
 

  }

}

