import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ProjectService } from "src/app/services/project.service";
import { Project } from "src/app/types/states";

@Component({
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit, OnDestroy{
    isAuthenticated : boolean;
    private authStateSub: Subscription;
    projectState: Project
    private projectStateSub: Subscription

    constructor(private authService: AuthService, private router: Router, private projectService: ProjectService) {}

    ngOnInit() {
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState) => {
            this.isAuthenticated = authState.isAuthenticated
        });
        this.projectState = this.projectService.getCurrentProjectState()
        this.projectStateSub = this.projectService.getProjectStateSubject().subscribe((projectState) => {
            this.projectState = projectState
        });
        this.projectService.getProjects();
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe()
        this.projectStateSub.unsubscribe()
    }
}
