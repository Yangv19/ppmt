import { Component, OnDestroy, OnInit } from "@angular/core";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "../../../services/auth.service"
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Auth } from "../../../types/states"

@Component({
    templateUrl: "./signup.component.html"
})
export class SignUpComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    private authStateSub: Subscription;

    constructor(private authService: AuthService, private alertService: AlertService, private router: Router) {}

    ngOnInit() {
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState : Auth) => {
            this.isAuthenticated = authState.isAuthenticated
            if (this.isAuthenticated) {
                this.router.navigate(["/"]);
            }
        });
    }

    onSubmit(form : NgForm) {
        if (form.value.password !== form.value.password2) {
            this.alertService.setAlert('Password do not match', 'danger', 3000);
        }
        this.authService.signup(form.value.name, form.value.email, form.value.password)
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe()
    }
}
