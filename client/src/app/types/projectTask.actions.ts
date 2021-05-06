import { Action } from '@ngrx/store';
import { ProjectTaskItem } from './reducers';

export enum ProjectTaskActionTypes {
    SET_PROJECT_TASKS = '[PROJECT_TASK] SET_PROJECT_TASKS',
    SET_PROJECT_TASK = '[PROJECT_TASK] SET_PROJECT_TASK',
    RESET_PROJECT_TASK = '[PROJECT_TASK] RESET_PROJECT_TASK',
    PROJECT_TASK_ERROR = '[PROJECT_TASK] PROJECT_TASK_ERROR'
}

export class SetProjectTasksAction implements Action {
    readonly type = ProjectTaskActionTypes.SET_PROJECT_TASKS;

    constructor(public payload : ProjectTaskItem[]) {}
}

export class SetProjectTaskAction implements Action {
    readonly type = ProjectTaskActionTypes.SET_PROJECT_TASK;

    constructor(public payload : ProjectTaskItem) {}
}

export class ResetProjectTaskAction implements Action {
    readonly type = ProjectTaskActionTypes.RESET_PROJECT_TASK;

    constructor(public payload: object = null) {}
}

export class ProjectTaskErrorAction implements Action {
    readonly type = ProjectTaskActionTypes.PROJECT_TASK_ERROR;

    constructor(public payload: object = null) {}
}

export type ProjectTaskAction =  SetProjectTasksAction | SetProjectTaskAction | ResetProjectTaskAction | ProjectTaskErrorAction;
