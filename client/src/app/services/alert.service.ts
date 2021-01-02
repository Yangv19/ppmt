import { Injectable } from "@angular/core";
import { Alert } from "../types/states"
import { Subject } from "rxjs";
import { v4 } from "uuid";

@Injectable({
    providedIn: "root"
})
export class AlertService {
    private alertStateSubject = new Subject<Alert[]>();
    private initialAlertState: Alert[] = []
    private currentAlertState: Alert[] = [...this.initialAlertState];

    getCurrentAlertState() {
        return this.currentAlertState;
    }

    getAlertStateSubject() {
        return this.alertStateSubject.asObservable();
    }

    removeAlert(id: string) {
        this.currentAlertState = this.currentAlertState.filter(alert => alert.id !== id);
        this.alertStateSubject.next(this.currentAlertState);
    }

    setAlert(msg: string, alertType: string, timeout : number = 2000) {
        let newAlert : Alert = {
            msg,
            alertType,
            id: v4()
        }
        this.currentAlertState = [...this.currentAlertState, newAlert]
        this.alertStateSubject.next(this.currentAlertState);
        setTimeout(() => {
            this.removeAlert(newAlert.id);
        }, timeout);
    }
}
