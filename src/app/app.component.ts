import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyCommonComponent } from './components/key-common/key-common.component';
import { Key } from './models/key';
import { KeySpecialComponent } from './components/key-special/key-special.component';
import { AllKeys } from './data/all-keys';
import { OutputTextareaComponent } from './components/output-textarea/output-textarea.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, KeyCommonComponent, KeySpecialComponent, OutputTextareaComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    allKeys: Array<Key> = [];

    constructor() {
        this.allKeys = AllKeys;
    }
}
