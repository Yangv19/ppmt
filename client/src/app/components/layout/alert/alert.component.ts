import { Component, OnDestroy, OnInit  } from "@angular/core";
import { Subscription } from 'rxjs'
import { Alert } from "../../../types/reducers"
import { Store } from '@ngrx/store'
import { RootState } from '../../../types/reducers'

@Component({
    selector: "Alert",
    templateUrl: "./alert.component.html"
})
export class AlertComponent implements OnInit, OnDestroy {
    alerts: Alert[];
    private alertSub : Subscription;

    constructor(private store: Store<RootState>) {}
    
    ngOnInit() {
        this.alertSub = this.store.select(store => store.alert).subscribe(res => {
            this.alerts = res;
        });
    }

    ngOnDestroy() {
        this.alertSub.unsubscribe();
    }
}
