/**
 * Created by andrei on 09.11.2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ResolveService {
  public isResolve: boolean;
 public get resolve() {
   return this.isResolve;
 }
 public set resolve (value) {
   this.isResolve = value;
 }
}
