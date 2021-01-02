import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment"
import { Project } from "../types/states"
import { Subject } from "rxjs";
import { AlertService } from "./alert.service";
import { ProjectForm } from "../types/forms";
import { Router } from "@angular/router";

const BACKEND_URL = environment.proxy;

@Injectable({
    providedIn: "root"
})
export class ProjectService {
    private projectStateSubject = new Subject<Project>();
    private initialState : Project = {
        projects: [],
        project: null,
        loadedProjects: false,
        loadedProject: false
    }
    private currentState : Project = {
        ...this.initialState
    }

    constructor(private http : HttpClient, private alertService: AlertService, private router: Router) {}

    getCurrentProjectState() {
        return this.currentState;
    }

    getProjectStateSubject() {
        return this.projectStateSubject.asObservable();
    }

    getProjects() {
        this.http.get<any[]>(BACKEND_URL + "/api/projects").subscribe(res => {
            this.currentState = {
                ...this.currentState,
                projects: res,
                loadedProjects: true
            }
            this.projectStateSubject.next({
                ...this.currentState});
        })
    }

    deleteProject(id : string) {
        this.http.delete(BACKEND_URL + "/api/projects/" + id).subscribe(res => {
            this.alertService.setAlert("Post Removed", "success");
            this.getProjects();
        })
    }

    createProject(name: string, description: string, start: string, end: string) {
        const formData: ProjectForm = {
            name,
            description,
            start,
            end
        }
        this.http.post(BACKEND_URL + "/api/projects", formData).subscribe(res => {
            this.alertService.setAlert("Project Created", "success");
            this.router.navigate(["dashboard"]);
        })
    }

    getProject(id : string) {
        this.http.get<any[]>(BACKEND_URL + "/api/projects/" + id).subscribe(res => {
            this.currentState = {
                ...this.currentState,
                project: res,
                loadedProject: true
            }
            this.projectStateSubject.next({
                ...this.currentState});
        }, err => {
            this.currentState = {
                ...this.currentState,
                project: null,
                loadedProject: true
            }
            this.projectStateSubject.next({
                ...this.currentState});
        })
    }

    resetState() {
        this.currentState = {
            ...this.initialState
        }
    }

    updateProject(id: string, name: string, description: string, start: string, end: string) {
        const formData: ProjectForm = {
            name,
            description,
            start,
            end
        }
        this.http.patch(BACKEND_URL + "/api/projects/" + id, formData).subscribe(res => {
            this.alertService.setAlert("Post updated", "success");
            this.router.navigate(["dashboard"]);
        })
    }
}
