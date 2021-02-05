import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  throwError = false;
  constructor(private service: StudentsService, private router: Router) {}

  ngOnInit() {
    this.throwError = false;
  }

  id: string;
  password: string;
  successLogin: boolean = false;

  login(loginForm) {
    if (loginForm.invalid) {
      return;
    }
    const isValidUser = this.service.validateStudent(loginForm.value);
    if (isValidUser) {
      this.service.saveLoggedUserInfo(isValidUser);
      this.router.navigate(['/home']);
    } else {
      this.throwError = true;
    }
  }

  }
