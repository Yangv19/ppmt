import { Component, Input, OnInit } from "@angular/core";
import { ProjectTaskService } from "src/app/services/project-task.service";

@Component({
    selector: "ProjectTaskItem",
    templateUrl: "./project-task-item.component.html"
})
export class ProjectTaskItemComponent implements OnInit {
    @Input() 
    projectTask: any;

    @Input()
    project: string;

    priorityClass: string;

    constructor(private projectTaskService: ProjectTaskService) {}

    ngOnInit() {
        if (this.projectTask.priority === "HIGH") {
            this.priorityClass = "bg-danger";
        };
      
        if (this.projectTask.priority === "MEDIUM") {
            this.priorityClass = "bg-yellow";
        };
    
        if (this.projectTask.priority === "LOW") {
            this.priorityClass = "bg-light-blue";
        };
    }

    onClick(projectId: string, projectTaskId: string) {
        this.projectTaskService.deleteProjectTask(projectId, projectTaskId);
    }
}
