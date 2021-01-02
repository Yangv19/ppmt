import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../components/auth/login/login.component";
import { SignUpComponent } from "../components/auth/signup/signup.component";
import { LandingComponent } from "../components/basic/landing/landing.component";
import { NotFoundComponent } from "../components/basic/not-found/not-found.component";
import { CreateProjectComponent } from "../components/dashboard/create-project/create-project.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { UpdateProjectComponent } from "../components/dashboard/update-project/update-project.component";
import { CreateProjectTaskComponent } from "../components/taskboard/create-project-task/create-project-task.component";
import { TaskBoardComponent } from "../components/taskboard/taskboard.component";
import { UpdateProjectTaskComponent } from "../components/taskboard/update-project-task/update-project-task.component";

const routes: Routes = [
    {
        path: "",
        component: LandingComponent
    },
    {
        path: "register",
        component: SignUpComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "create-project",
        component: CreateProjectComponent
    },
    {
        path: "update-project/:id",
        component: UpdateProjectComponent
    },
    {
        path: "taskboard/:id",
        component: TaskBoardComponent
    },
    {
        path: "create-project-task/:id",
        component: CreateProjectTaskComponent
    },
    {
        path: "update-project-task/:projectId/:projectTaskId",
        component: UpdateProjectTaskComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
