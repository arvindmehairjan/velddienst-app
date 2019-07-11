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

  addEmployee(firstName, lastName, address, telephone, email, employeeId, group, verspreiding, film, nabezoek, bijbelstudie, overige) {
    this.employeeService.addEmployee(firstName, lastName, address, telephone, email, employeeId,
       group, verspreiding, film, nabezoek, bijbelstudie, overige).subscribe(() => {
      this.router.navigate(['/lists']);
    });
  }

  ngOnInit() {
  }

}
