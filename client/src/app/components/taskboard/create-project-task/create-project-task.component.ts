import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ProjectTaskService } from "src/app/services/project-task.service";
import { ProjectService } from "src/app/services/project.service";
import { Auth, Project } from "src/app/types/states";

@Component({
    templateUrl: "./create-project-task.component.html"
})
export class CreateProjectTaskComponent implements OnInit, OnDestroy{
    isAuthenticated : boolean;
    private id;
    private authStateSub: Subscription;
    private projectStateSub: Subscription;
    private routeSub: Subscription;

    constructor(private authService: AuthService, private projectService: ProjectService, 
        private route: ActivatedRoute, private router: Router, private projectTaskService: ProjectTaskService) {}

    ngOnInit() {
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState: Auth) => {
            this.isAuthenticated = authState.isAuthenticated
        });
        this.projectStateSub = this.projectService.getProjectStateSubject().subscribe((projectState: Project) => {
            if (projectState.loadedProject && projectState.project === null) {
                this.projectService.resetState();
                this.router.navigate(["/NotFound"])
            }
        });
        this.routeSub = this.route.params.subscribe(params => {
            this.projectService.getProject(params["id"]);
            this.id = params["id"];
        })
    }

    onSubmit(form : NgForm) {
        this.projectTaskService.createProjectTask(this.id, form.value.summary, form.value.criteria, form.value.due,
                                                  form.value.priority, form.value.status);
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe()
        this.projectStateSub.unsubscribe()
        this.routeSub.unsubscribe()
    }
}
