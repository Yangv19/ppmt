import { ProjectTaskAction, ProjectTaskActionTypes } from '../types/projectTask.actions';
import { ProjectTask } from '../types/reducers';

const initialState : ProjectTask = {
    projectTasks: [],
    projectTask: null,
    loadedProjectTasks : false,
    loadedProjectTask: false
}

export function ProjectTaskReducer(state: ProjectTask = initialState, action: ProjectTaskAction) {
    const { type, payload } = action;
    switch (type) {
        case ProjectTaskActionTypes.SET_PROJECT_TASKS:
            return {
                ...state,
                projectTasks: payload,
                loadedProjectTasks: true
            };
        case ProjectTaskActionTypes.SET_PROJECT_TASK:
            return {
                ...state,
                projectTask: payload,
                loadedProjectTask: true
            };
        case ProjectTaskActionTypes.RESET_PROJECT_TASK:
            return initialState;
        case ProjectTaskActionTypes.PROJECT_TASK_ERROR:
            return {
                ...state,
                projectTask: null,
                loadedProjectTask: true
            };
        default:
            return state;
    }
}
