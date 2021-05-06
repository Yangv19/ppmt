import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store'
import { RootState } from '../types/reducers'
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {

	constructor (private store: Store<RootState>, private router: Router) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
		return this.store.select(store => store.auth).pipe(skipWhile(auth => !auth.loaded)).pipe(
			map(auth => {
				if (auth.isAuthenticated) {
					this.router.navigate(["/"]);
				}
				return !auth.isAuthenticated;
			})
		);
	}
}
