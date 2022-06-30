import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LecServiceService {
  baseAPIUrl: string = 'https://student-managment-system-a0e66-default-rtdb.firebaseio.com/'

  constructor(
    private http: HttpClient
  ) { }



  create(lec: any): Observable<any> {
    return this.http.post(`${this.baseAPIUrl}/lec.json`, lec);
  }


  getAll(): Observable<any> {
    // let headers:HttpHandler =new HttpHandler().
    // set('content-type','application/jason')
    // .set('Access-Control-Allow origin','*')
    return this.http.get(`${this.baseAPIUrl}/lec.json`).pipe(map((res) => {
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
    return this.http.delete(`${this.baseAPIUrl}/lec/${id}.json`);
  }

  update(lec: any, id: string): Observable<any> {
    return this.http.put(`${this.baseAPIUrl}/lec/${id}.json`, lec);
  }
}




