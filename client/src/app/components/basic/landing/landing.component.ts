import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'
import { RootState } from '../../../types/reducers'

@Component({
    selector: "Landing",
    templateUrl: "./landing.component.html"
})
export class LandingComponent implements OnInit, OnDestroy {
    isAuthenticated : boolean;
    private authSub :Subscription;

    constructor(private store: Store<RootState>) {}

    ngOnInit() {
        this.authSub = this.store.select(store => store.auth).subscribe(res => this.isAuthenticated = res.isAuthenticated);
    }

    ngOnDestroy() {
        this.authSub.unsubscribe();
    }
}
