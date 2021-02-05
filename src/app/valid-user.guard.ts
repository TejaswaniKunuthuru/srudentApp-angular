import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentsService } from './services/students.service';

@Injectable()
export class ValidUserGuard implements CanActivate {
    constructor(private service: StudentsService) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        const userInfo = this.service.getLoggedUserInfo();
        if (userInfo) {
            return true;
        } else {
            return false;
        }
    }
}
