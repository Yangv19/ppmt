export interface User {
    id: number,
    name: string,
    email: string
}

export interface Auth {
    isAuthenticated: boolean,
    loaded: boolean,
    user: User
}

export interface Alert {
    msg: string,
    alertType: string,
    id: string
};

export interface ProjectItem {
    id: number,
    name: string,
    description: string,
    begin: string,
    end: string
};

export interface ProjectTaskItem {
    id: number,
    summary: string,
    criteria: string,
    priority: string,
    status: string,
    due: string
};

export interface Project {
    projects: ProjectItem[],
    project: ProjectItem,
    loadedProjects: boolean,
    loadedProject: boolean
};

export interface ProjectTask {
    projectTasks: ProjectTaskItem[],
    projectTask: ProjectTaskItem,
    loadedProjectTasks: boolean,
    loadedProjectTask: boolean
};

export interface RootState {
    readonly auth: Auth,
    readonly alert: Alert[],
    readonly project: Project,
    readonly projectTask: ProjectTask
}
