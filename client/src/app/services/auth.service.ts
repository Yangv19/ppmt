import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Store } from '@ngrx/store'
import { RootState, User } from '../types/reducers'
import { RegisterForm, LoginForm } from "../types/forms"
import { LoadUserValidAction, LoadUserInvalidAction } from "src/app/types/auth.actions";
import { Router } from "@angular/router";

const BACKEND_URL = environment.proxy;

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(private http: HttpClient, private store: Store<RootState>, private router: Router) {}

    loadUser() {
        if (localStorage.token) {
            this.http.get<User>(BACKEND_URL + "/api/users").subscribe(res => {
                this.store.dispatch(new LoadUserValidAction(res));
            })
        } else {
            this.store.dispatch(new LoadUserInvalidAction());
        }
    }

    logout() {
        localStorage.removeItem("token");
        this.store.dispatch(new LoadUserInvalidAction());
        this.router.navigate(["/"]);
    }

    signup(name: string, email: string, password: string) {
        const formData: RegisterForm = {
            name,
            email,
            password
        }
        this.http.post<{token: string}>(BACKEND_URL + "/api/users/register", formData).subscribe(res => {
            localStorage.setItem("token", res.token);
            this.loadUser();
            this.router.navigate(["/"]);
        })
    }

    login(email: string, password: string) {
        const formData: LoginForm = {
            email,
            password
        }
        this.http.post<{token: string}>(BACKEND_URL + "/api/users/login", formData).subscribe(res => {
            localStorage.setItem("token", res.token);
            this.loadUser();
            this.router.navigate(["/"]);
        })
    }
}
