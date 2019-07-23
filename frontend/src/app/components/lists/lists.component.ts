import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../employee.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  employees: Employee[];
  displayedColumns = ['firstName', 'lastName', 'address', 'telephone', 'email', 'employeeId', 'group',
   'verspreiding', 'film', 'nabezoek', 'bijbelstudie', 'maand', 'overige', 'actions'];

  constructor(private employeeService: EmployeeService, private router: Router) { }

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
}
