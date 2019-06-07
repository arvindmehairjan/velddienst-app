import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.url}/employees`);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.url}/employees/${id}`);
  }

  addEmployee(firstName, lastName, employeeId, group) {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      employeeId: employeeId,
      group: group
    };
    return this.http.post(`${this.url}/employees/add`, employee);
  }

  updateEmployee(id, firstName, lastName, employeeId, group) {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      employeeId: employeeId,
      group: group
    };
    return this.http.post(`${this.url}/employees/update/${id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.get(`${this.url}/employees/delete/${id}`);
  }
}
