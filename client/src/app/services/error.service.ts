import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EMPTY, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { AlertService } from "./alert.service";
import { AuthService } from "./auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor(private alertService: AlertService, private authService: AuthService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError((error : HttpErrorResponse) => {
                if (error.error.errors[0].msg === "Invalid token, authorization denied") {
                    this.alertService.setAlert("Session expire", "danger");
                    this.authService.logout();
                    return EMPTY;
                } else if (error.error.errors[0].msg === "Project Not Found" || error.error.errors[0].msg === "Project Task Not Found") {
                    error.error.errors.forEach(error => this.alertService.setAlert(error.msg, "danger"))
                    return throwError(error);
                } else {
                    error.error.errors.forEach(error => this.alertService.setAlert(error.msg, "danger"))
                    return EMPTY;
                }
            })
        )
    }
}
