import {
  Component,
  OnInit
} from '@angular/core';
import { ResolveService } from './resolve.service';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private isTtysti = false;
  constructor(private resolveService: ResolveService) {}
  public ngOnInit() {
    console.log('hello `Home` component');
  }
  public onClick() {
    this.resolveService.isResolve = this.isTtysti;
    this.isTtysti = !this.isTtysti;
  }
}
