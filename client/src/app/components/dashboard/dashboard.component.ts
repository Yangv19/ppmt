import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { Project } from "src/app/types/reducers";
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'
import { RootState } from '../../types/reducers'

@Component({
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit, OnDestroy {
    project : Project;
    private projectSub: Subscription;

    constructor(private store: Store<RootState>, private projectService: ProjectService) {}

    ngOnInit() {
        this.projectService.getProjects();
        this.projectSub = this.store.select(store => store.project).subscribe(res => {
            this.project = res;
        });
    }

    ngOnDestroy() {
        this.projectSub.unsubscribe();
    }
}
