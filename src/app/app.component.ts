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
    contentObject = signal('');
    shiftKeyActive: boolean = false;
    capsLockKeyActive: boolean = false;

    constructor() {
        this.allKeys = AllKeys;
    }

    processKeyEvent(key: Key) {
        let newContent = key.value[0];
        let keyType = key.type;
        let existingContent = this.contentObject();

        if (newContent.length > 1) {
            if (newContent === 'Shift') {
                this.shiftKeyActive = !this.shiftKeyActive;
                this.capsLockKeyActive = false;
            }
            if (newContent === 'Caps Lock') {
                this.capsLockKeyActive = !this.capsLockKeyActive;
                this.shiftKeyActive = false;
            }
            if (newContent === 'Backspace') {
                existingContent = existingContent.slice(0, (existingContent.length - 1));
                newContent = '';
            }
            if (newContent === 'Enter' || newContent === 'Ctrl' || newContent === 'Alt' || newContent === 'Tab' || newContent === 'Shift' || newContent === 'Caps Lock') {
                newContent = '';
            }
        } else {
            newContent = newContent.toLowerCase();
        }

        // check if shift key active
        if (key.levels === 1 && key.value[0] !== 'Backspace' && key.value[0] !== 'Enter' && key.value[0] !== 'Shift' && key.value[0] !== 'Ctrl' && key.value[0] !== 'Alt' && key.value[0] !== 'Caps Lock' && key.value[0] !== 'Tab') {
            console.log('key has 1 level');
            if (this.shiftKeyActive === true) {
                newContent = newContent.toUpperCase();
                this.shiftKeyActive = false;
            } else {
                newContent = newContent.toLowerCase();
            }
        }
        if (key.levels === 2) {
            if (this.shiftKeyActive === true) {
                newContent = key.value[0];
                this.shiftKeyActive = false;
            } else {
                newContent = key.value[1];
            }
        }

        // check if caps lock key active
        if (key.levels === 1 && this.capsLockKeyActive) {
            newContent = newContent.toUpperCase();
        }

        // space bar click
        if (keyType === 4) {
            newContent = ' ';
        }

        this.contentObject.set(existingContent + newContent);
    }
}
