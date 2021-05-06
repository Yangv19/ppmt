import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store'
import { ProjectTaskItem, RootState } from '../types/reducers'
import { environment } from "../../environments/environment"
import { AlertService } from "./alert.service";
import { ProjectTaskForm } from "../types/forms";
import { SetProjectTasksAction, SetProjectTaskAction, ResetProjectTaskAction, ProjectTaskErrorAction } from '../types/projectTask.actions';

const BACKEND_URL = environment.proxy;

@Injectable({
    providedIn: "root"
})
export class ProjectTaskService {

    constructor(private http : HttpClient, private store: Store<RootState>,  
                private alertService: AlertService, private router: Router) {}

    getProjectTasks(id: number) {
        this.http.get<ProjectTaskItem[]>(BACKEND_URL + "/api/projectTasks/" + id).subscribe(res => {
            this.store.dispatch(new SetProjectTasksAction(res));
        })
    }

    deleteProjectTask(projectId: number, projectTaskId: number) {
        this.http.delete(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId).subscribe(res => {
            this.alertService.setAlert("Project Task Removed", "success")
            this.getProjectTasks(projectId);
        })
    }

    createProjectTask(id: number, summary: string, criteria: string, due: string, priority: string, status: string) {
        const formData : ProjectTaskForm = {
            summary,
            criteria,
            due,
            priority,
            status
        }
        this.http.post(BACKEND_URL + "/api/projectTasks/" + id, formData).subscribe(res => {
            this.alertService.setAlert("ProjectTask Created", "success");
            this.getProjectTasks(id);
            this.router.navigate(["taskboard/" + id]);
        })
    }

    getProjectTask(projectId: number, projectTaskId: number) {
        this.http.get<ProjectTaskItem>(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId).subscribe(res => {
            this.store.dispatch(new SetProjectTaskAction(res));
        }, err => {
            this.store.dispatch(new ProjectTaskErrorAction());
            this.resetState();
            this.router.navigate(["/notfound"]);
        })
    }

    resetState() {
        this.store.dispatch(new ResetProjectTaskAction());
    }

    updateProjectTask(projectId: number, projectTaskId: number, summary: string, criteria: string, due: string, priority: string, status: string) {
        const formData: ProjectTaskForm = {
            summary,
            criteria,
            due,
            priority,
            status
        }
        this.http.patch(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId, formData).subscribe(res => {
            this.alertService.setAlert("Project Task updated", "success");
            this.getProjectTasks(projectId);
            this.router.navigate(["taskboard/" + projectId]);
        })
    }
}
