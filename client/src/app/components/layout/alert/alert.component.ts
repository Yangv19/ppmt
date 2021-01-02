import { Component, OnDestroy, OnInit  } from "@angular/core";
import { Subscription } from "rxjs";
import { Alert } from "../../../types/states"
import { AlertService } from "../../../services/alert.service"

@Component({
    selector: "Alert",
    templateUrl: "./alert.component.html"
})
export class AlertComponent implements OnInit, OnDestroy {
    alerts: Alert[];
    private alertStateSub: Subscription;

    constructor(private alertService: AlertService) {}
    
    ngOnInit() {
        this.alerts = this.alertService.getCurrentAlertState();
        this.alertStateSub = this.alertService.getAlertStateSubject().subscribe((alertState : Alert[]) => {
            this.alerts = alertState;
        });
    }

    ngOnDestroy() {
        this.alertStateSub.unsubscribe();
    }
}
