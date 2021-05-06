import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment"
import { Store } from '@ngrx/store'
import { ProjectItem, RootState } from '../types/reducers'
import { AlertService } from "./alert.service";
import { ProjectForm } from "../types/forms";
import { Router } from "@angular/router";
import { SetProjectsAction, SetProjectAction, ResetProjectAction, ProjectErrorAction } from '../types/project.actions';

const BACKEND_URL = environment.proxy;

@Injectable({
    providedIn: "root"
})
export class ProjectService {

    constructor(private http : HttpClient, private store: Store<RootState>, 
                private alertService: AlertService, private router: Router) {}

    getProjects() {
        this.http.get<ProjectItem[]>(BACKEND_URL + "/api/projects").subscribe(res => {
            this.store.dispatch(new SetProjectsAction(res));
        });
    }

    deleteProject(id : number) {
        this.http.delete(BACKEND_URL + "/api/projects/" + id).subscribe(res => {
            this.alertService.setAlert("Project Removed", "success");
            this.getProjects();
        })
    }

    createProject(name: string, description: string, begin: string, end: string) {
        const formData: ProjectForm = {
            name,
            description,
            begin,
            end
        }
        this.http.post(BACKEND_URL + "/api/projects", formData).subscribe(res => {
            this.alertService.setAlert("Project Created", "success");
            this.getProjects();
            this.router.navigate(["dashboard"]);
        })
    }

    getProject(id : number) {
        this.http.get<ProjectItem>(BACKEND_URL + "/api/projects/" + id).subscribe(res => {
            this.store.dispatch(new SetProjectAction(res));
        }, err => {
            this.store.dispatch(new ProjectErrorAction());
            this.resetState();
            this.router.navigate(["/notfound"]);
        })
    }

    resetState() {
        this.store.dispatch(new ResetProjectAction());
    }

    updateProject(id: number, name: string, description: string, begin: string, end: string) {
        const formData: ProjectForm = {
            name,
            description,
            begin,
            end
        }
        this.http.patch(BACKEND_URL + "/api/projects/" + id, formData).subscribe(res => {
            this.alertService.setAlert("Project updated", "success");
            this.getProjects();
            this.router.navigate(["dashboard"]);
        })
    }
}
