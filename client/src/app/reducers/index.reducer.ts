import { AuthReducer } from './auth.reducer';
import { AlertReducer } from './alert.reducer';
import { ProjectReducer } from './project.reducer';
import { ProjectTaskReducer } from './projectTask.reducer';

export default {
    auth: AuthReducer,
    alert: AlertReducer,
    project: ProjectReducer,
    projectTask: ProjectTaskReducer
}
