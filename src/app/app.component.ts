import { Component } from '@angular/core';
import { ExampleService } from './example.services';

@Component({
  selector: 'app-root',
  template: '<h1> {{ title }} </h1>',
  providers: [ExampleService]
})

export class AppComponent {

  title: string;

  constructor(private _exampleService: ExampleService){

  }

  ngOnInit(){
    this.title = this._exampleService.someMethod();
  }

}
