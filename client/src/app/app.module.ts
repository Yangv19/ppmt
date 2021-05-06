import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ErrorInterceptor } from './services/error.service';
import { HeaderInterceptor } from './services/header.service';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AlertComponent } from './components/layout/alert/alert.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/basic/landing/landing.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { SignUpComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NotFoundComponent } from './components/basic/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotAuthorizedComponent } from './components/basic/not-authorized/not-authorized.component';
import { SpinnerComponent } from './components/layout/spinner/spinner.component';
import { ProjectItemComponent } from './components/dashboard/project-item/project-item.component';
import { CreateProjectComponent } from './components/dashboard/create-project/create-project.component';
import { UpdateProjectComponent } from './components/dashboard/update-project/update-project.component';
import { TaskBoardComponent } from './components/taskboard/taskboard.component';
import { ProjectTaskItemComponent } from './components/taskboard/project-task-item/project-task-item.component';
import { CreateProjectTaskComponent } from './components/taskboard/create-project-task/create-project-task.component';
import { UpdateProjectTaskComponent } from './components/taskboard/update-project-task/update-project-task.component';
import { StoreModule } from '@ngrx/store';
import RootReducer from './reducers/index.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent,
    FooterComponent,
    LandingComponent,
    SignUpComponent,
    LoginComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    DashboardComponent,
    SpinnerComponent,
    ProjectItemComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    TaskBoardComponent,
    ProjectTaskItemComponent,
    CreateProjectTaskComponent,
    UpdateProjectTaskComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(RootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
