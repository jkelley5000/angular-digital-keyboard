import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Key } from '../../models/key';
import { KeySpecialComponent } from '../key-special/key-special.component';

@Component({
    selector: 'app-key-common',
    standalone: true,
    imports: [CommonModule, KeySpecialComponent],
    templateUrl: './key-common.component.html',
    styleUrl: './key-common.component.scss'
})
export class KeyCommonComponent {
    @Input() keys: Array<Key> = [];

    @Output() keyClickEvent = new EventEmitter();

    keysRowOne: Array<Key> = [];
    keysRowTwo: Array<Key> = [];
    keysRowThree: Array<Key> = [];
    keysRowFour: Array<Key> = [];
    keysRowFive: Array<Key> = [];
    shiftKeyActive: boolean = false;
    capsLockKeyActive: boolean = false;

    ngOnInit(): void {
        this.keys.map(key => {
            if (key.row === 1) {
                this.keysRowOne.push(key);
            }
            if (key.row === 2) {
                this.keysRowTwo.push(key);
            }
            if (key.row === 3) {
                this.keysRowThree.push(key);
            }
            if (key.row === 4) {
                this.keysRowFour.push(key);
            }
            if (key.row === 5) {
                this.keysRowFive.push(key);
            }
        });
    }

    onKeyClick(key: Key) {
        const keyValue = key.value[0];
        if (keyValue.length > 1) {
            if (keyValue === 'Shift') {
                this.shiftKeyActive = !this.shiftKeyActive;
                this.capsLockKeyActive = false;
            }
            if (keyValue === 'Caps Lock') {
                this.capsLockKeyActive = !this.capsLockKeyActive;
                this.shiftKeyActive = false;
            }
        } else {
            this.shiftKeyActive = false;
        }
        this.keyClickEvent.emit(key);
    }
}
