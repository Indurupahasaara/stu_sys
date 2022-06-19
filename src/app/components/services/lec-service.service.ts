import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LecServiceService {
  
http:any;
  constructor(  ) { }

  eate(student :any):Observable<any>{
    return this['http'].post(`${environment.firebase}/student.json`,student);
  }


  getAll() {

  }

   
  delete(id: string): Observable<any> {
    return this['http'].delete(`${environment.firebase}/student/${id}.json`);
  }

  update(customer: any, id: string): Observable<any> {
    return this.http.put(`${environment.firebase}/student/${id}.json`,lec);
  }
}
function lec(arg0: string, lec: any): Observable<any> {
  throw new Error('Function not implemented.');
}

