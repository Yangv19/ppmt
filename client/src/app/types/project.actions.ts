import { Action } from '@ngrx/store';
import { ProjectItem } from './reducers';

export enum ProjectActionTypes {
    SET_PROJECTS = '[PROJECT] SET_PROJECTS',
    SET_PROJECT = '[PROJECT] SET_PROJECT',
    RESET_PROJECT = '[PROJECT] RESET_PROJECT',
    PROJECT_ERROR = '[PROJECT] PROJECT_ERROR'
}

export class SetProjectsAction implements Action {
    readonly type = ProjectActionTypes.SET_PROJECTS;

    constructor(public payload : ProjectItem[]) {}
}

export class SetProjectAction implements Action {
    readonly type = ProjectActionTypes.SET_PROJECT;

    constructor(public payload : ProjectItem) {}
}

export class ResetProjectAction implements Action {
    readonly type = ProjectActionTypes.RESET_PROJECT;

    constructor(public payload: object = null) {}
}

export class ProjectErrorAction implements Action {
    readonly type = ProjectActionTypes.PROJECT_ERROR;

    constructor(public payload: object = null) {}
}

export type ProjectAction =  SetProjectsAction | SetProjectAction | ResetProjectAction | ProjectErrorAction;
