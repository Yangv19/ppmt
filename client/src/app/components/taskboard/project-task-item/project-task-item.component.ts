import { Component, Input, OnInit } from "@angular/core";
import { ProjectTaskService } from "src/app/services/project-task.service";
import { ProjectTaskItem } from "src/app/types/reducers";

@Component({
    selector: "ProjectTaskItem",
    templateUrl: "./project-task-item.component.html"
})
export class ProjectTaskItemComponent implements OnInit {
    @Input() 
    projectTask: ProjectTaskItem;

    @Input()
    id: number;

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

    onClick(projectId: number, projectTaskId: number) {
        this.projectTaskService.deleteProjectTask(projectId, projectTaskId);
    }
}
