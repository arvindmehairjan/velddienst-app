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

  addEmployee(firstName, lastName, address, telephone, email, employeeId, group, verspreiding, film, nabezoek, bijbelstudie, overige) {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      telephone: telephone,
      email: email,
      employeeId: employeeId,
      group: group,
      verspreiding: verspreiding,
      film: film,
      nabezoek: nabezoek,
      bijbelstudie: bijbelstudie,
      overige: overige
    };
    return this.http.post(`${this.url}/employees/add`, employee);
  }

  updateEmployee(id, firstName, lastName, address, telephone, email, employeeId, group, verspreiding, film, nabezoek, bijbelstudie, overige) {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      telephone: telephone,
      email: email,
      employeeId: employeeId,
      group: group,
      verspreiding: verspreiding,
      film: film,
      nabezoek: nabezoek,
      bijbelstudie: bijbelstudie,
      overige: overige
    };
    return this.http.post(`${this.url}/employees/update/${id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.get(`${this.url}/employees/delete/${id}`);
  }
}
