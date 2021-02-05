import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regSuccess: boolean = false;
  throwError = false;
  courses = ["Angular", "Spring", "React"];
  constructor(private service: StudentsService, private router: Router) {}

  ngOnInit() {}
  stdRegister(regForm) {
    if (regForm.invalid) {
      return;
    }
    const studentInfo = regForm.value;
    const isSaved = this.service.saveStudent(studentInfo);
    if (isSaved) {
      this.router.navigate(["/login"]);
    } else {
      this.throwError = true;
    }
  }
}
