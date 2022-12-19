import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../http-call.service';
import { IEmployee } from '../model/employee-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gridData: IEmployee[] = [];
  heading = ['S.No','Name','Age'];
  constructor(private httpService: HttpCallService) { }

  ngOnInit(): void {
    this.employeeDetails()
  }
  employeeDetails() {
    this.httpService.employeeDetails().subscribe((temp: IEmployee[])=>{
      console.log("temp",temp);
      this.gridData = temp;
    })
    // return this.gridData;
  }

  employeeInfo() {
    console.log("button click");
  
  }

}
