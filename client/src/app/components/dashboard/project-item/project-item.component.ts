import { Component, Input } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";

@Component({
    selector: "ProjectItem",
    templateUrl: "./project-item.component.html"
})
export class ProjectItemComponent {
    @Input() 
    project: any;

    constructor(private projectService: ProjectService) {}

    onClick(id : string) {
        this.projectService.deleteProject(id);
    }
}
