import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Auth } from "src/app/types/states";

@Component({
    templateUrl: "./create-project.component.html"
})
export class CreateProjectComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    private authStateSub: Subscription;

    constructor(private authService: AuthService, private projectService: ProjectService) {}

    ngOnInit() {
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState: Auth) => {
            this.isAuthenticated = authState.isAuthenticated
        });
    }

    onSubmit(form : NgForm) {
        this.projectService.createProject(form.value.name, form.value.description, form.value.start, form.value.end);
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe()
    }
}
