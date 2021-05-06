import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "./alert.service";

@Injectable({
    providedIn: "root"
})
export class ParamsService {

    constructor(private router: Router, private alertService: AlertService) {}

    validIntegerParam(param: string) {
        if (!/^\+?[1-9]\d*$/.test(param)) {
            this.router.navigate(["/notfound"]);
            this.alertService.setAlert("Invalid Parameter", "danger");
            return false;
        }
        return true;
    }
}
