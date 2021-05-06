import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Store } from '@ngrx/store'
import { RootState } from '../../../types/reducers'
import { ProjectService } from "src/app/services/project.service";
import { ParamsService } from "src/app/services/params.service";
import { skipWhile } from 'rxjs/operators';

@Component({
    templateUrl: "./update-project.component.html"
})
export class UpdateProjectComponent implements OnInit, OnDestroy {
    private id: number;
    private projectSub: Subscription;
    private routeSub: Subscription;
    form: FormGroup;

    constructor(private store: Store<RootState>, private projectService: ProjectService, private paramsService: ParamsService, 
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null),
            description: new FormControl(null),
            start: new FormControl(null),
            end: new FormControl(null)
        });
        this.routeSub = this.route.params.subscribe(params => {
            if (this.paramsService.validIntegerParam(params["id"])) {
                this.projectService.getProject(params["id"]);
            }
        })
        this.projectSub = this.store.select(store => store.project)
                          .pipe(skipWhile(project => !project.loadedProject)).subscribe(res => {
            if (res.project !== null) {
                this.id = res.project.id;
                this.form.setValue({
                    name: res.project.name,
                    description: res.project.description,
                    start: res.project.begin,
                    end: res.project.end
                });
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
        this.projectSub.unsubscribe();
    }

    onSubmit() {
        this.projectService.updateProject(this.id, this.form.value.name, this.form.value.description, 
                                          this.form.value.start, this.form.value.end)
    }
}
