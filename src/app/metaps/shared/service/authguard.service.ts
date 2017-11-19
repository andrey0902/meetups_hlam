/**
 * Created by andrei on 13.11.2017.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResolveService } from '../../../home/resolve.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router,
  private resolveService: ResolveService) { }

  public canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean
    | Observable<boolean>
    | Promise<boolean> {
    if (this.resolveService.isResolve) {
      return true;
    }
    console.log('state', state);
    this.router.navigate(['/metaps/all', { queryParams: {returnUrl: state.url}}]);
    return false;
  }
}
