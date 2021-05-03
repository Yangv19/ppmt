import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import { Auth } from "src/app/types/states";

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    private authStateSub: Subscription;

    constructor(private authService: AuthService, private alertService: AlertService, private router: Router) {}

    ngOnInit() {
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState : Auth) => {
            this.isAuthenticated = authState.isAuthenticated;
            if (this.isAuthenticated) {
                this.router.navigate(["/"]);
            }
        });
    }

    onSubmit(form : NgForm) {
        this.authService.login(form.value.email, form.value.password);
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe();
    }
}
