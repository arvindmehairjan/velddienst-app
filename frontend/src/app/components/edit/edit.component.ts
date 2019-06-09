import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  employee: any = {};
  updateForm: FormGroup;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: '',
      group: ''
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.employeeService.getEmployeeById(this.id).subscribe(res => {
        this.employee = res;
        this.updateForm.get('firstName').setValue(this.employee.firstName);
        this.updateForm.get('lastName').setValue(this.employee.lastName);
        this.updateForm.get('employeeId').setValue(this.employee.employeeId);
        this.updateForm.get('group').setValue(this.employee.group);
      });
    });
  }

  updateEmployee(firstName, lastName, employeeId, group) {
    this.employeeService.updateEmployee(this.id, firstName, lastName, employeeId, group).subscribe(() => {
      this.snackBar.open('Employee updated succesfully', 'OK', {
        duration: 3000
      });
    });
  }

}
