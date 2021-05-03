import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../../../services/auth.service"
import { Auth } from "../../../types/states"

@Component({
    selector: "Landing",
    templateUrl: "./landing.component.html"
})
export class LandingComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    private authStateSub: Subscription;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState : Auth) => {
            this.isAuthenticated = authState.isAuthenticated;
        });
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe();
    }
}
