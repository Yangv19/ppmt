import { Component, Input } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { ProjectItem } from "src/app/types/reducers";

@Component({
    selector: "ProjectItem",
    templateUrl: "./project-item.component.html"
})
export class ProjectItemComponent {
    @Input() 
    project: ProjectItem;

    constructor(private projectService: ProjectService) {}

    onClick(id : number) {
        this.projectService.deleteProject(id);
    }
}
