/**
 * Created by andrei on 08.11.2017.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolveService } from '../../home/resolve.service';

@Component({
 selector: 'all',
 templateUrl: './all.component.html'
})

export class AllComponent implements OnInit {
  public returnedUrl: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private resolveService: ResolveService) {
  }

  public ngOnInit() {

  }

  public goToRedirect() {
    this.returnedUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.resolveService.isResolve = true;
    setTimeout(() => {
      this.router.navigate([this.returnedUrl]);
    }, 3000);
  }
}
