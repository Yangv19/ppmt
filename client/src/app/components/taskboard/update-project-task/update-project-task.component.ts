import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ProjectTaskService } from "src/app/services/project-task.service";
import { ProjectService } from "src/app/services/project.service";
import { Auth, ProjectTask } from "src/app/types/states";

@Component({
    templateUrl: "./update-project-task.component.html"
})
export class UpdateProjectTaskComponent implements OnInit, OnDestroy{
    isAuthenticated : boolean;
    projectTaskState: ProjectTask;
    private project: string;
    private authStateSub: Subscription;
    private routeSub: Subscription;
    private projectTaskStateSub: Subscription;
    form: FormGroup

    constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, 
                private projectTaskService: ProjectTaskService) {}

    ngOnInit() {
        this.form = new FormGroup({
            summary: new FormControl(null),
            criteria: new FormControl(null),
            due: new FormControl(null),
            priority: new FormControl(null),
            status: new FormControl(null)
        })
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState: Auth) => {
            this.isAuthenticated = authState.isAuthenticated
        });
        this.projectTaskStateSub = this.projectTaskService.getProjectTaskStateSubject().subscribe((projectTaskState: ProjectTask) => {
            this.projectTaskState = projectTaskState
            if (projectTaskState.loadedProjectTask && projectTaskState.projectTask === null) {
                this.projectTaskService.resetState();
                this.router.navigate(["/NotFound"])
            } else {
                this.form.setValue({
                    summary: projectTaskState.projectTask.summary,
                    criteria: projectTaskState.projectTask.criteria,
                    due: projectTaskState.projectTask.due,
                    priority: projectTaskState.projectTask.priority,
                    status: projectTaskState.projectTask.status
                })
            }
        });
        this.routeSub = this.route.params.subscribe(params => {
            this.projectTaskService.getProject(params["projectId"], params["projectTaskId"]);
            this.project = params["projectId"];
        })
    }

    onSubmit() {
        this.projectTaskService.updateProjectTask(this.project, this.projectTaskState.projectTask.id, this.form.value.summary, 
                                                  this.form.value.criteria, this.form.value.due, this.form.value.priority, 
                                                  this.form.value.status)
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe()
        this.routeSub.unsubscribe()
        this.projectTaskStateSub.unsubscribe()
    }
}
