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
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      employeeId: ['', Validators.required],
      group: ['', Validators.required],
      verspreiding: ['', Validators.required],
      film: ['', Validators.required],
      nabezoek: ['', Validators.required],
      bijbelstudie: ['', Validators.required],
      overige: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.employeeService.getEmployeeById(this.id).subscribe(res => {
        this.employee = res;
        this.updateForm.get('firstName').setValue(this.employee.firstName);
        this.updateForm.get('lastName').setValue(this.employee.lastName);
        this.updateForm.get('address').setValue(this.employee.address);
        this.updateForm.get('telephone').setValue(this.employee.telephone);
        this.updateForm.get('email').setValue(this.employee.email);
        this.updateForm.get('employeeId').setValue(this.employee.employeeId);
        this.updateForm.get('group').setValue(this.employee.group);
        this.updateForm.get('verspreiding').setValue(this.employee.verspreiding);
        this.updateForm.get('film').setValue(this.employee.film);
        this.updateForm.get('nabezoek').setValue(this.employee.nabezoek);
        this.updateForm.get('bijbelstudie').setValue(this.employee.bijbelstudie);
        this.updateForm.get('overige').setValue(this.employee.overige);
      });
    });
  }

  updateEmployee(firstName, lastName, address, telephone, email, employeeId, group, verspreiding,
     film, nabezoek, bijbelstudie, overige) {
    this.employeeService.updateEmployee(this.id, firstName, lastName, address, telephone,
       email, employeeId, group, verspreiding, film, nabezoek,
       bijbelstudie, overige ).subscribe(() => {
      this.snackBar.open('Employee updated succesfully', 'OK', {
        duration: 3000
      });
    });
  }

}
