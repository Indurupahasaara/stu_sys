import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// @Injectable({
//   providedIn: 'root'
// })
export class StudentService {
  //[x: string]: any;
  baseAPIUrl: string = 'https://student-managment-system-a0e66-default-rtdb.firebaseio.com/'

  constructor(
    private http: HttpClient
  ) {}



  create(student :any):Observable<any>{
    return this.http.post(`${this.baseAPIUrl}/student.json`,student);
  }


  // getAll():Observable<any> {
  //   return this.http.get(`${this.baseAPIUrl}/student.json`).pipe(map((res)=>{
  //     const students:any[]=[];
  //     for(const key in res){
  //       if(res.hasOwnProperty(key)){
  //          students.push({...res[key],id: key});
  //       }
  //     }
  //      return students;
  //   }));
  // }

   
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseAPIUrl}/student/${id}.json`);
  }

  update(student: any, id: string): Observable<any> {
    return this.http.put(`${this.baseAPIUrl}/student/${id}.json`,student);
  }

  getAll():Observable<any>{
    // let headers:HttpHandler =new HttpHandler().
    // set('content-type','application/jason')
    // .set('Access-Control-Allow origin','*')
    return this.http.get(`${this.baseAPIUrl}/student.json`).pipe(map((res)=>{
      const customers:any[]=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          customers.push({...res[key],id: key});
        }
      }
      return customers;
    }));

  }


  
}
// function customer(arg0: string, customer: any): Observable<any> {
//   throw new Error('Function not implemented.');
// }

// function student(arg0: string, student: any): Observable<any> {
//   throw new Error('Function not implemented.');
// }