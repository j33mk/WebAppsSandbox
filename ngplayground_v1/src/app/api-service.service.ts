import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs'
import {retry,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiURL = "http://127.0.0.1:8000";
  baseURL: string = "https://api.github.com/";

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    return this.http.get<any>(this.apiURL+'/users/').pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    );
  }
  getSingleUser(id:number):Observable<any>{
    return this.http.get<any>(this.apiURL+'/users/'+id).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    );
  }
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'usersY/' + userName + '/repos')
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
 
          //Handle the error here
 
          return throwError(err);    //Rethrow it back to component
        })
      )
  }


}
