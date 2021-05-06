import { Component, OnDestroy, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service"
import { Store } from '@ngrx/store'
import { RootState } from '../../../types/reducers'
import { Subscription } from 'rxjs'

@Component({
    selector: 'Navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    private authSub : Subscription;

    constructor(private store: Store<RootState>, private authService: AuthService) {}

    ngOnInit() {
        this.authSub = this.store.select(store => store.auth).subscribe(res => this.isAuthenticated = res.isAuthenticated);
    }

    ngOnDestroy() {
        this.authSub.unsubscribe();
    }
    
    logout() {
        this.authService.logout();
    }

}
