import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedUserInfo;
  totlaUserInfo;
  fields = ["id", "name", "course", "city", "state", "country"]
  constructor(private service: StudentsService, private router: Router) { }

  ngOnInit() {
    this.loggedUserInfo = this.service.getLoggedUserInfo();
    //console.log(this.loggedUserInfo);
    this.totlaUserInfo = this.service.getStudents();
  }

  logout() {
    this.service.deleteLoggedUserInfo();
    this.router.navigate(['/']);
  }

}
