/**
 * Created by andrei on 09.11.2017.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ResolveService } from '../home/resolve.service';

@Injectable()
export class AuthGuardService implements CanActivate {

 constructor(private resolveService: ResolveService,
             private router: Router) { }
 public canActivate() {
    if (this.resolveService.isResolve) {
      return this.resolveService.isResolve;
    }
    this.router.navigate(['']);
    return false;
 }
}
