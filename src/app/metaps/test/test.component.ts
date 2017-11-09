/**
 * Created by andrei on 08.11.2017.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 selector: 'test',
 templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {
  public id: number;
 constructor(private route: ActivatedRoute,
             private router: Router) { }

 public ngOnInit() {
/*   this.route.params.forEach((result) => {
     console.log('router id', result);
   });*/
  this.id = this.route.snapshot.params['id'];
  console.log('id', this.id);
 }
 public redirectTo() {
   this.router.navigate(['/metaps', {id: 33, params1: 'nameVasa', params2: 'test2'}]);
   /*но через запятую можно передавать больше параметров и из них построится путь*/
   /*к примеру ['/meetups', 55]  получим путь '/meetups/55' */
   /*не обязательные параметры передаются обектам*/
 }
}
