import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent {

    constructor(private authService: AuthService) {}

    onSubmit(form : NgForm) {
        this.authService.login(form.value.email, form.value.password);
    }
}
