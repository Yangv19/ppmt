import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Store } from '@ngrx/store'
import { RootState } from '../../../types/reducers'
import { ProjectTaskService } from "src/app/services/project-task.service";
import { ProjectService } from "src/app/services/project.service";
import { ParamsService } from "src/app/services/params.service";
import { skipWhile } from 'rxjs/operators';

@Component({
    templateUrl: "./create-project-task.component.html"
})
export class CreateProjectTaskComponent implements OnInit, OnDestroy{
    private id: number;
    private projectSub: Subscription;
    private routeSub: Subscription;

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
            }
        });
    }

    onSubmit(form : NgForm) {
        this.projectTaskService.createProjectTask(this.id, form.value.summary, form.value.criteria, form.value.due,
                                                  form.value.priority, form.value.status);
    }

    ngOnDestroy() {
        this.projectSub.unsubscribe()
        this.routeSub.unsubscribe()
    }
}
