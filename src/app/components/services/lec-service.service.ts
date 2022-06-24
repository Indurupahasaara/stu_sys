import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LecServiceService {
  
http:any;
  constructor(  ) { }

  baseAPIUrl: string = 'https://student-managment-system-a0e66-default-rtdb.firebaseio.com/'

  eate(student :any):Observable<any>{
    return this['http'].post(`${this.baseAPIUrl}/lec.json`,lec);
  }


  getAll():Observable<any>{
    // let headers:HttpHandler =new HttpHandler().
    // set('content-type','application/jason')
    // .set('Access-Control-Allow origin','*')
    return this.http.get(`${this.baseAPIUrl}/lec.json`).pipe(map((res)=>{
      // const lec:any[]=[];
      // for(const key in res){
      //   if(res.hasOwnProperty(key)){
      //     lec.push({...res[key],id: key});
      //   }
      // }
      // return lec;
    }));

  }

   
  delete(id: string): Observable<any> {
    return this['http'].delete(`${this.baseAPIUrl}/lec/${id}.json`);
  }

  update(customer: any, id: string): Observable<any> {
    return this.http.put(`${this.baseAPIUrl}/lec/${id}.json`,lec);
  }
}
function lec(arg0: string, lec: any): Observable<any> {
  throw new Error('Function not implemented.');
}

