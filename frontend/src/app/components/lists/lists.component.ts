import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../employee.model';
import { MatTableDataSource } from '@angular/material';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  config: ExportAsConfig = {
    type: 'xlsx',
    elementId: 'myTableElementId',
  }

  employees: Employee[];
  displayedColumns = ['firstName', 'lastName', 'address', 'telephone', 'email', 'employeeId', 'group',
   'verspreiding', 'film', 'nabezoek', 'bijbelstudie', 'maand', 'overige', 'actions'];

  constructor(private exportAsService: ExportAsService, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
        console.log('Data requested ...');
        console.log(this.employees);
      });
  }

  editEmployee(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.fetchEmployees();
    });
  }

  exportAs() {
    // download the file using old school javascript method
    this.exportAsService.save(this.config, 'My File Name').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.config).subscribe(content => {
      console.log(content);
    });
  }
}
