export interface Auth {
    isAuthenticated: boolean,
    user: any
}

export interface Alert {
    msg: string,
    alertType: string,
    id: string
};

export interface Project {
    projects: any[],
    project: any,
    loadedProjects: boolean,
    loadedProject: boolean
};

export interface ProjectTask {
    projectTasks: any[],
    projectTask: any,
    loadedProjectTasks: boolean,
    loadedProjectTask: boolean
};
