import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store'
import { RootState } from '../../../types/reducers'
import { ProjectTaskService } from "src/app/services/project-task.service";
import { ParamsService } from "src/app/services/params.service";
import { Subscription } from "rxjs";
import { skipWhile } from 'rxjs/operators';

@Component({
    templateUrl: "./update-project-task.component.html"
})
export class UpdateProjectTaskComponent implements OnInit, OnDestroy{
    private projectId: number;
    private projectTaskId: number;
    private routeSub: Subscription;
    private projectTaskSub: Subscription;
    form: FormGroup

    constructor(private store: Store<RootState>, private projectTaskService: ProjectTaskService,
                private paramsService: ParamsService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.form = new FormGroup({
            summary: new FormControl(null),
            criteria: new FormControl(null),
            due: new FormControl(null),
            priority: new FormControl(null),
            status: new FormControl(null)
        })
        this.routeSub = this.route.params.subscribe(params => {
            if (this.paramsService.validIntegerParam(params["projectId"]) && 
                this.paramsService.validIntegerParam(params["projectTaskId"])) {
                this.projectId = params["projectId"];
                this.projectTaskService.getProjectTask(params["projectId"], params["projectTaskId"]);
            }
        });
        this.projectTaskSub = this.store.select(store => store.projectTask)
                              .pipe(skipWhile(projectTask => !projectTask.loadedProjectTask)).subscribe(res => {
            if (res.projectTask !== null) {
                this.projectTaskId = res.projectTask.id;
                this.form.setValue({
                    summary: res.projectTask.summary,
                    criteria: res.projectTask.criteria,
                    due: res.projectTask.due,
                    priority: res.projectTask.priority,
                    status: res.projectTask.status
                });
            }
        });
    }

    onSubmit() {
        this.projectTaskService.updateProjectTask(this.projectId, this.projectTaskId, this.form.value.summary, 
                                                  this.form.value.criteria, this.form.value.due, this.form.value.priority, 
                                                  this.form.value.status)
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe()
        this.projectTaskSub.unsubscribe()
    }
}
