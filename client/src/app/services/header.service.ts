import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (localStorage.token) {
            const authRequest = req.clone({
                headers: req.headers.set("x-auth-token", localStorage.token)
            });
            return next.handle(authRequest);
        }
        return next.handle(req);
    }
}
