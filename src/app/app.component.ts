import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyCommonComponent } from './components/key-common/key-common.component';
import { Key } from './models/key';
import { KeySpecialComponent } from './components/key-special/key-special.component';
import { AllKeys } from './data/all-keys';
import { OutputTextareaComponent } from './components/output-textarea/output-textarea.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, KeyCommonComponent, KeySpecialComponent, OutputTextareaComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    allKeys: Array<Key> = [];
    contentObject = signal('toast');

    constructor() {
        this.allKeys = AllKeys;
    }

    processKeyEvent(key: Key) {
        const newContent = key?.value[0];
        this.contentObject.set(this.contentObject() + newContent);
    }
}
