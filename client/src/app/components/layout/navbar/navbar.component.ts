import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../../../services/auth.service"
import { Auth } from "../../../types/states"

@Component({
    selector: 'Navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    private authStateSub: Subscription;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
        this.authStateSub = this.authService.getAuthStateSubject().subscribe((authState : Auth) => {
            this.isAuthenticated = authState.isAuthenticated;
        });
    }

    logout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.authStateSub.unsubscribe();
    }
}
