import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ProjectTaskService } from "src/app/services/project-task.service";
import { ProjectService } from "src/app/services/project.service";
import { Auth, Project, ProjectTask } from "src/app/types/states";

@Component({
    templateUrl: "./taskboard.component.html"
})
export class TaskBoardComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    projectTaskState: ProjectTask;
    todoItems : any[] = [];
    inProgressItems: any[] = [];
    doneItems: any[] = [];
    private id: string;
    private authStateSub: Subscription;
    private projectStateSub: Subscription;
    private routeSub: Subscription;
    private projectTaskStateSub: Subscription;

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
            } else {
                this.projectTaskService.getProjectTasks(this.id)
            }
        });
        this.routeSub = this.route.params.subscribe(params => {
            this.projectService.getProject(params["id"]);
            this.id = params["id"]
        })
        this.projectTaskState = this.projectTaskService.getCurrentProjectTaskState();
        this.projectTaskStateSub = this.projectTaskService.getProjectTaskStateSubject().subscribe((projectTaskState: ProjectTask) => {
            this.todoItems = [];
            this.inProgressItems = [];
            this.doneItems = [];
            this.projectTaskState = projectTaskState;
            for (let i = 0; i < this.projectTaskState.projectTasks.length; i++) {
                if (this.projectTaskState.projectTasks[i].status === "TO DO") {
                    this.todoItems.push(this.projectTaskState.projectTasks[i]);
                }
          
                if (this.projectTaskState.projectTasks[i].status === "IN PROGRESS") {
                    this.inProgressItems.push(this.projectTaskState.projectTasks[i]);
                }
          
                if (this.projectTaskState.projectTasks[i].status === "DONE") {
                    this.doneItems.push(this.projectTaskState.projectTasks[i]);
                }
            }
        })
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe()
        this.projectStateSub.unsubscribe()
        this.routeSub.unsubscribe()
        this.projectTaskStateSub.unsubscribe()
    }
}
