import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LecServiceService } from '../services/lec-service.service';


@Component({
  selector: 'app-lec-add',
  templateUrl: './lec-add.component.html',
  styleUrls: ['./lec-add.component.css']
})
export class LecAddComponent implements OnInit {


  submitted: boolean = false;
  lecList: any[] = [];
  lec_regForm!: FormGroup;
  isUpdate: boolean = false;
  lectureList: any[] = [];
  loading$: any;
  customerService: any;
  customerList: any;
  selectedId: any;

  get f() {
    return this.lec_regForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private lecservice: LecServiceService,
    private router:Router
  ) {

  }
  ngOnInit(): void {
    this.loading$ = this.asObservable();
    this.initForm();
    this.getList();
  }
  asObservable(): any {

  }

  // Get all details -- error occured

  getList(): void {
    this.lecservice.getAll().subscribe((res: any) => {
      this.lecList = res;
    });
  }


  initForm(): void {
    this.lec_regForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lecId: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      id: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      course: ['', [Validators.required]],
      education: ['', [Validators.required]]
    });
  }
  // To Submit

  Onsubmit(): void {

    this.submitted = true;
    console.log(this.lec_regForm.valid);
    if (this.lec_regForm.valid) {

      this.lecservice.create(this.lec_regForm.value).subscribe(res => {
        console.log("Record Inserted");
      })
      console.log(this.lec_regForm.value);
      alert("Data Add succesfully");

      this.lec_regForm.reset();
    }


    console.log("alert"); 
  }
  // to update
  onUpdate(lec: any): void {
    this.isUpdate = true;
    this.selectedId = lec.id;

    this.lec_regForm.patchValue({

    })
  }
  // to delete
  onDelete(id: string): void {
    let isConfirm: boolean = confirm('Are You want to delete this record')
    if (isConfirm) {
      this.lecservice.delete(id).subscribe(res => {
        console.log(res);
        this.getList();

      });
    }
  }
  // to cleare
  clearForm(): void {
    this.submitted = false;
    this.lec_regForm.clearValidators;
    this.lec_regForm.reset;
  }

  logout():void{
    this.router.navigate(['/welcome'])
  }
}