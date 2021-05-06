import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Store } from '@ngrx/store'
import { ProjectTaskItem, RootState } from '../../types/reducers'
import { ProjectTaskService } from "src/app/services/project-task.service";
import { ProjectService } from "src/app/services/project.service";
import { ParamsService } from "src/app/services/params.service";
import { skipWhile } from 'rxjs/operators';

@Component({
    templateUrl: "./taskboard.component.html"
})
export class TaskBoardComponent implements OnInit, OnDestroy {
    todoItems : ProjectTaskItem[] = [];
    inProgressItems: ProjectTaskItem[] = [];
    doneItems: ProjectTaskItem[] = [];
    loadedProjectTasks: boolean;
    id: number;
    private projectSub: Subscription;
    private routeSub: Subscription;
    private projectTaskSub: Subscription;

    constructor(private store: Store<RootState>, private projectService: ProjectService, private projectTaskService: ProjectTaskService,
                private paramsService: ParamsService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if (this.paramsService.validIntegerParam(params["id"])) {
                this.projectService.getProject(params["id"]);
            }
        });
        this.projectSub = this.store.select(store => store.project)
                          .pipe(skipWhile(project => !project.loadedProject)).subscribe(res => {
            if (res.project !== null) {
                this.id = res.project.id;
                this.projectTaskService.getProjectTasks(this.id);
            }
        });
        this.projectTaskSub = this.store.select(store => store.projectTask).subscribe(res => {
            this.loadedProjectTasks = res.loadedProjectTasks;
            this.todoItems = [];
            this.inProgressItems = [];
            this.doneItems = [];
            for (let i = 0; i < res.projectTasks.length; i++) {
                if (res.projectTasks[i].status === "TO DO") {
                    this.todoItems.push(res.projectTasks[i]);
                }
          
                if (res.projectTasks[i].status === "IN PROGRESS") {
                    this.inProgressItems.push(res.projectTasks[i]);
                }
          
                if (res.projectTasks[i].status === "DONE") {
                    this.doneItems.push(res.projectTasks[i]);
                }
            }
        })
    }

    ngOnDestroy() {
        this.projectSub.unsubscribe()
        this.routeSub.unsubscribe()
        this.projectTaskSub.unsubscribe()
    }
}
