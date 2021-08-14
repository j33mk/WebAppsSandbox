import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../shared/user'
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import {getUser} from '../shared/user'



@Component({
  selector: 'app-api-play-ground',
  templateUrl: './api-play-ground.component.html',
  styleUrls: ['./api-play-ground.component.css']
})
export class ApiPlayGroundComponent implements OnInit {
  myUsers: User[] = [];
  singleUser: User = new User();
  resultDto: any;
  errorMsg: string;
  selectedLevel: any;
  dropDownData: Array<any> = [
    { id: 0, name: "name1" },
    { id: 1, name: "name2" }
  ];

  constructor(public restApi: ApiServiceService, private http: HttpClient) {
    this.errorMsg = "";
  }
  ngOnInit(): void {
  }
  doSome():void{
    let k:string[] = ["jamal","shah"];
    k.filter(p=>{
      return p!="jamal";
    });
    k.forEach(a=>{
      console.log(a);
    })
    console.log("fooooo")
  }
  getFakeApi() {
    (this.http.get<any>('https://jsonplaceholder.typicode.com/users').
      pipe(
        catchError((error) => {
          console.log('error caught in component')
          console.error(error);
          return throwError(error);
        })
      )).subscribe(data => {
        console.log(data);
      }, (error) => {
        alert(error.message);
      });

  }
  getCurrentWeather(){
    (this.http.get<any>('https://j33mk-weather.free.beeceptor.com/getCurrentWeather').
      pipe(
        catchError((error) => {
          console.log('error caught in component')
          console.error(error);
          return throwError(error);
        })
      )).subscribe(data => {
        console.log(data);
      }, (error) => {
        alert(error.message);
      });
  }
  getAllUsers() {
    this.restApi.getUsers().subscribe(data => {
      this.resultDto = JSON.stringify(data);
      this.myUsers = JSON.parse(this.resultDto)['users'];
      console.log(this.myUsers);
    }, (error) => {
      if (error.status == 0) {
        alert('No internet connection found.');
        this.errorMsg = error.message;
      }
    });

  }
  getSingleUser() {
    this.restApi.getSingleUser(99).subscribe(data => {
      this.resultDto = JSON.stringify(data);
      this.singleUser = JSON.parse(this.resultDto)['data'];
      console.log(this.singleUser);
    }, error => {
      if (error.status == 0) {
        alert('No internet connection found.');
        this.errorMsg = error.message;
      }
    });
  }

  selected() {
    console.log(this.selectedLevel)
  }
  doCalculation() {
    try {
      let number1: number = 0;
      let number2: number = 40;
      let result: number = number1 + number2;
      console.log(result);
    }
    catch (error:any) {
      this.errorMsg = error.message;
    }
  }

}
