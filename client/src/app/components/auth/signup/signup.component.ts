import { Component } from "@angular/core";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "../../../services/auth.service"
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: "./signup.component.html"
})
export class SignUpComponent {

    constructor(private authService: AuthService, private alertService: AlertService) {}

    onSubmit(form : NgForm) {
        if (form.value.password !== form.value.password2) {
            this.alertService.setAlert('Password do not match', 'danger', 3000);
        } else {
            this.authService.signup(form.value.name, form.value.email, form.value.password);
        }
    }
}
