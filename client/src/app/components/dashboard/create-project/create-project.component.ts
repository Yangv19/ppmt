import { Component } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: "./create-project.component.html"
})
export class CreateProjectComponent {

    constructor(private projectService: ProjectService) {}

    onSubmit(form : NgForm) {
        this.projectService.createProject(form.value.name, form.value.description, form.value.start, form.value.end);
    }
}
