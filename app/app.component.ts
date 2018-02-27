import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Welcome to {{name}} on-line shop</h1>`
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'ggear';
    }
}