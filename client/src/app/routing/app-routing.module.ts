import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../components/auth/login/login.component";
import { SignUpComponent } from "../components/auth/signup/signup.component";
import { LandingComponent } from "../components/basic/landing/landing.component";
import { NotFoundComponent } from "../components/basic/not-found/not-found.component";
import { NotAuthorizedComponent } from "../components/basic/not-authorized/not-authorized.component";
import { CreateProjectComponent } from "../components/dashboard/create-project/create-project.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { UpdateProjectComponent } from "../components/dashboard/update-project/update-project.component";
import { CreateProjectTaskComponent } from "../components/taskboard/create-project-task/create-project-task.component";
import { TaskBoardComponent } from "../components/taskboard/taskboard.component";
import { UpdateProjectTaskComponent } from "../components/taskboard/update-project-task/update-project-task.component";
import { AuthGuard } from "../guards/auth.guard";
import { NotAuthGuard } from "../guards/not-auth.guard"

const routes: Routes = [
    {
        path: "",
        component: LandingComponent
    },
    {
        path: "register",
        component: SignUpComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "create-project",
        component: CreateProjectComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "update-project/:id",
        component: UpdateProjectComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "taskboard/:id",
        component: TaskBoardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "create-project-task/:id",
        component: CreateProjectTaskComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "update-project-task/:projectId/:projectTaskId",
        component: UpdateProjectTaskComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "notauthorized",
        component: NotAuthorizedComponent
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
