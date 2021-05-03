import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Auth } from "../types/states"
import { Subject } from "rxjs";
import { RegisterForm, LoginForm } from "../types/forms"

const BACKEND_URL = environment.proxy;

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private authStateSubject = new Subject<Auth>();
    private initialAuthState: Auth = {
        isAuthenticated: false,
        user: null
    }
    private currentState : Auth = {
        ...this.initialAuthState
    }

    constructor(private http: HttpClient) {}

    loadUser() {
        this.http.get(BACKEND_URL + "/api/users").subscribe(res => {
            this.currentState.isAuthenticated = true;
            this.currentState.user = res;
            this.authStateSubject.next({
                isAuthenticated : true, 
                user : res});
        })
    }

    getCurrentAuthState() {
        return this.currentState;
    }

    getAuthStateSubject() {
        return this.authStateSubject.asObservable();
    }

    logout() {
        localStorage.removeItem("token");
        this.currentState = {
            ...this.initialAuthState
        }
        this.authStateSubject.next(this.initialAuthState);
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
        })
    }
}
