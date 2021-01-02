export interface RegisterForm {
    name: string,
    email: string,
    password: string
};

export interface LoginForm {
    email: string,
    password: string
};

export interface ProjectForm {
    name: string,
    description: string,
    start: string,
    end: string
};

export interface ProjectTaskForm {
    summary: string,
    criteria: string,
    priority: string,
    status: string,
    due: string
};
