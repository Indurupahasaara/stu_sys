import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  [x: string]: any;
  // baseAPIUrl: string = 'https://student-managment-system-a0e66-default-rtdb.firebaseio.com/'

  constructor(
  ) { }



  create(student :any):Observable<any>{
    return this['http'].post(`${environment.firebase}/student.json`,student);
  }


  getAll() {

  }

   
  delete(id: string): Observable<any> {
    return this['http'].delete(`${environment.firebase}/student/${id}.json`);
  }

  update(customer: any, id: string): Observable<any> {
    return this['http'].put(`${environment.firebase}/student/${id}.json`,student);
  }


  
}
function customer(arg0: string, customer: any): Observable<any> {
  throw new Error('Function not implemented.');
}

function student(arg0: string, student: any): Observable<any> {
  throw new Error('Function not implemented.');
}