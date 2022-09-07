import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { OperatorService } from "../../services/operator.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    constructor(private operatorService: OperatorService, private router: Router) {}

    public canActivate(next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let response: boolean = false;

        if (this.operatorService.isAdmin()) {
            response = true;
        } else {
            alert('No tiene permiso para acceder a este recurso!');
        }

        return response;
    }
}