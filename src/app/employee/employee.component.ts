import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCallService } from '../http-call.service';
import { IEmployee } from '../model/employee-list';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  id: number | null | undefined;
  emp: IEmployee | undefined;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpCallService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? +id : null;
    console.log('id = ', this.id);
    this.httpService.employeeDetails().subscribe((e: IEmployee[]) => {
      this.emp = e.find((t) => this.id === t.employeeId);
    });
  }
  
}
