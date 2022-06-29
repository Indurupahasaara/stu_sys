import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  lectureList:any[]=[];
  loading$: any;
  customerService: any;
  customerList: any;
  selectedId: any;

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
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required ,Validators.email]],
      contactNo: ['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      id: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      education: ['', [Validators.required]]
    });
  }

 

// To Submit

  Onsubmit(): void {
    this.lecservice.create(this.lec_regForm.value).subscribe(() => {
      console.log("Record Inserted");
      alert:('Record Add Sucessfully' );
    })
    this.submitted = true;
    if (this.lec_regForm.valid) {
      console.log(this.lec_regForm.value);
      alert("Record Add Succesfully");
      this.submitted = false;
    }
    console.log("akaalffm");
    alert("Record Add Succesfully");
  }
// to update
  onUpdate(lec:any):void{
    this.isUpdate =true;
    this.selectedId= lec.id;

    this.lec_regForm.patchValue({
     
    })
  }
// to delete
  onDelete(id: string): void {
    let isConfirm: boolean = confirm('Are You want to delete this record')
    if (isConfirm) {
     this.lecservice.delete(id).subscribe(res =>{
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
}