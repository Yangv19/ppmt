import { Injectable } from "@angular/core";
import { Alert } from "../types/reducers"
import { Store } from '@ngrx/store'
import { RootState } from '../types/reducers'
import { v4 } from "uuid";
import { SetAlertAction, RemoveAlertAction } from "src/app/types/alert.actions"; 

@Injectable({
    providedIn: "root"
})
export class AlertService {
    constructor(private store: Store<RootState>) {}

    setAlert(msg: string, alertType: string, timeout : number = 2000) {
        let newAlert : Alert = {
            msg,
            alertType,
            id: v4()
        }
        this.store.dispatch(new SetAlertAction(newAlert));
        setTimeout(() => {
            this.store.dispatch(new RemoveAlertAction(newAlert));
        }, timeout);
    }
}
