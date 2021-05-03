import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment"
import { AlertService } from "./alert.service";
import { ProjectTask } from "../types/states"
import { ProjectTaskForm } from "../types/forms";

const BACKEND_URL = environment.proxy;

@Injectable({
    providedIn: "root"
})
export class ProjectTaskService {
    private projectTaskStateSubject = new Subject<ProjectTask>();
    private initialState : ProjectTask = {
        projectTasks: [],
        projectTask: null,
        loadedProjectTasks: false,
        loadedProjectTask: false
    }
    private currentState : ProjectTask = {
        ...this.initialState
    }

    constructor(private http : HttpClient, private alertService: AlertService, private router: Router) {}

    getCurrentProjectTaskState() {
        return this.currentState;
    }

    getProjectTaskStateSubject() {
        return this.projectTaskStateSubject.asObservable();
    }

    getProjectTasks(id: string) {
        this.http.get<any[]>(BACKEND_URL + "/api/projectTasks/" + id).subscribe(res => {
            this.currentState = {
                ...this.currentState,
                projectTasks: res,
                loadedProjectTasks: true
            }
            this.projectTaskStateSubject.next({
                ...this.currentState});
        })
    }

    deleteProjectTask(projectId: string, projectTaskId: string) {
        this.http.delete(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId).subscribe(res => {
            this.alertService.setAlert("Project Task Removed", "success")
            this.getProjectTasks(projectId);
        })
    }

    createProjectTask(projectId: string, summary: string, criteria: string, due: string, priority: string, status: string) {
        const formData : ProjectTaskForm = {
            summary,
            criteria,
            due,
            priority,
            status
        }
        this.http.post(BACKEND_URL + "/api/projectTasks/" + projectId, formData).subscribe(res => {
            this.alertService.setAlert("ProjectTask Created", "success");
            this.router.navigate(["taskboard/" + projectId]);
        })
    }

    getProjectTask(projectId: string, projectTaskId: string) {
        this.http.get(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId).subscribe(res => {
            this.currentState = {
                ...this.currentState,
                projectTask: res,
                loadedProjectTask: true
            }
            this.projectTaskStateSubject.next({
                ...this.currentState});
        }, err => {
            this.currentState = {
                ...this.currentState,
                projectTask: null,
                loadedProjectTask: true
            }
            this.projectTaskStateSubject.next({
                ...this.currentState});
        })
    }

    resetState() {
        this.currentState = {
            ...this.initialState
        }
    }

    updateProjectTask(projectId: string, projectTaskId: string, summary: string, criteria: string, due: string, priority: string, status: string) {
        const formData: ProjectTaskForm = {
            summary,
            criteria,
            due,
            priority,
            status
        }
        this.http.patch(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId, formData).subscribe(res => {
            this.alertService.setAlert("Project Task updated", "success");
            this.router.navigate(["taskboard/" + projectId]);
        })
    }
}
