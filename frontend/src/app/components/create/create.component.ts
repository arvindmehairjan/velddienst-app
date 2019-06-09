import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: '',
      group: ''
    });
  }

  addEmployee(firstName, lastName, employeeId, group) {
    this.employeeService.addEmployee(firstName, lastName, employeeId, group).subscribe(() => {
      this.router.navigate(['/lists']);
    });
  }

  ngOnInit() {
  }

}
