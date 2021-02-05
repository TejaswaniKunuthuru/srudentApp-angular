import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor() {}

  saveStudent(student) {
    const studentsInfo = this.getStudents();
    if (student) {
      const info = studentsInfo.find(s => s.id === student.id);
      if (info) {
        return false;
      }
      studentsInfo.push(student);
      localStorage.setItem("studentInfo", JSON.stringify(studentsInfo));
      return true;
    }
  }

  getStudents() {
    const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
    return studentInfo ? studentInfo : [];
  }

  validateStudent(userInfo) {
    const { id, password } = userInfo;
    const studentsInfo = this.getStudents();
    if (studentsInfo.length > 0) {
      const studentDetails = studentsInfo.find(
        student => student.id === id && student.password === password
      );
      return studentDetails;
    } else {
      return false;
    }
  }

  saveLoggedUserInfo(student) {
    localStorage.setItem("loggedInUser", JSON.stringify(student));
  }

  deleteLoggedUserInfo() {
    localStorage.removeItem("loggedInUser");
  }

  getLoggedUserInfo() {
    const info = localStorage.getItem("loggedInUser");
    if (info) {
      return JSON.parse(info);
    } else {
      return false;
    }
  }
}
