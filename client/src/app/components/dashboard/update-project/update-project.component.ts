import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ProjectService } from "src/app/services/project.service";
import { Auth } from "src/app/types/states";
import { Project } from "src/app/types/states";

@Component({
    templateUrl: "./update-project.component.html"
})
export class UpdateProjectComponent {
    isAuthenticated : boolean;
    projectState: Project;
    private authStateSub: Subscription;
    private projectStateSub: Subscription;
    private routeSub: Subscription;
    form: FormGroup;

    constructor(private authService: AuthService, private projectService: ProjectService, 
                private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null),
            description: new FormControl(null),
            start: new FormControl(null),
            end: new FormControl(null)
        });
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState: Auth) => {
            this.isAuthenticated = authState.isAuthenticated;
        });
        this.projectState = this.projectService.getCurrentProjectState();
        this.projectStateSub = this.projectService.getProjectStateSubject().subscribe((projectState: Project) => {
            this.projectState = projectState;
            if (this.projectState.loadedProject && this.projectState.project === null) {
                this.projectService.resetState();
                this.router.navigate(["/NotFound"]);
            } else {
                this.form.setValue({
                    name: projectState.project.name,
                    description: projectState.project.description,
                    start: projectState.project.begin,
                    end: projectState.project.end
                });
            }
        });
        this.routeSub = this.route.params.subscribe(params => {
            this.projectService.getProject(params["id"]);
        })
    }

    onSubmit() {
        this.projectService.updateProject(this.projectState.project.id, this.form.value.name, this.form.value.description, 
                                          this.form.value.start, this.form.value.end)
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe()
        this.projectStateSub.unsubscribe()
        this.routeSub.unsubscribe()
    }
}
