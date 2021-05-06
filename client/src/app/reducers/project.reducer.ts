import { ProjectAction, ProjectActionTypes } from '../types/project.actions';
import { Project } from '../types/reducers';

const initialState : Project = {
    projects: [],
    project: null,
    loadedProjects : false,
    loadedProject: false
}

export function ProjectReducer(state: Project = initialState, action: ProjectAction) {
    const { type, payload } = action;
    switch (type) {
        case ProjectActionTypes.SET_PROJECTS:
            return {
                ...state,
                projects: payload,
                loadedProjects: true
            };
        case ProjectActionTypes.SET_PROJECT:
            return {
                ...state,
                project: payload,
                loadedProject: true
            };
        case ProjectActionTypes.RESET_PROJECT:
            return initialState;
        case ProjectActionTypes.PROJECT_ERROR:
            return {
                ...state,
                project: null,
                loadedProject: true
            };
        default:
            return state;
    }
}
