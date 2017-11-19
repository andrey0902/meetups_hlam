/**
 * Created by andrei on 12.11.2017.
 */
import { Component, OnInit } from '@angular/core';
import { AUTO } from '../shared/authocomplete-data';
import { CompleterService, CompleterData } from 'ng2-completer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { AuthocompleteService } from './authocomplete.service';
@Component({
  selector: 'authocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./authocomplete.component.scss']
})

export class AuthocompleteComponent implements OnInit {
  public myFormAutocomplete: FormGroup;
  public options: any;
  public searchStr: string;
  public captain: string;
  public dataService: CompleterData;
  public dataService2: CompleterData;
  public searchData = [
    {color: 'red', value: '#f00'},
    {color: 'green', value: '#0f0'},
    {color: 'blue', value: '#00f'},
    {color: 'cyan', value: '#0ff'},
    {color: 'magenta', value: '#f0f'},
    {color: 'yellow', value: '#ff0'},
    {color: 'black', value: '#000'}
  ];
  public captains = ['James T. Kirk',
    'Benjamin Sisko', 'Jean-Luc Picard',
    'Spock',
    'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett'];

  constructor(private completerService: CompleterService,
              private authoService: AuthocompleteService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
    this.dataService2 =
      completerService.remote('https://jsonplaceholder.typicode.com/posts/');
  }

  public ngOnInit() {
    this.createForm();
    this.serchEvent();
  }

  public createForm() {
    this.myFormAutocomplete = new FormGroup({
      searchStr: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  public serchEvent() {
    let userAutho: any;
    this.myFormAutocomplete.get('searchStr')
      .valueChanges
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search value is same as previous
      .switchMap((value) => {
        if (value) {
          userAutho = this.authoService.getSerchUsers(value);
          this.dataService = this.completerService
            .local(userAutho, 'name', 'name')
            .imageField('Picture');
          console.log('userAutho', userAutho);
          console.log('value', value);
          /*emit event*/
        }
        return 'str';
      })
      .subscribe();
  }

  public onSubmit($event, myFormAutocomplete) {
    console.log('myFormAutocomplete.value', myFormAutocomplete.value);
  }

  public onSelected(event) {
    console.log('event', event);
  }
}
