import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Key } from '../../models/key';

@Component({
    selector: 'app-key-common',
    standalone: true,
    imports: [CommonModule],
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
    animateKeys: boolean = false;

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

    /**
     * @memberof KeyCommonComponent
     * @param key {
     *   "row": number;
     *   "levels": number;
     *   "value": Array<string>;
     *   "type": number;
     * }
     * @description Bound to the click event on any key. Applies initial UI logic if certain keys are clicked (Shift, Caps Lock), then emits the
     * click event while passing the whole key object to the parent component.
     */
    onKeyClick(key: Key, index: number) {
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
        this.onAnimateKeys(key.type, index);
        this.keyClickEvent.emit(key);
    }

    /**
     * @memberof KeyCommonComponent
     * @param keyType Possible value of 0-5, type 5 is a special key.
     * @param index Position in array of keys within a row.
     * @description When invoked, determines if the music "special key" has been clicked. If true, sets property
     * utilized to apply a css class that utilizes a pre-defined animation to make the keys appear to be dancing 
     * to a beat.
     */
    onAnimateKeys(keyType: number, index: number) {
        if (keyType === 5 && index === 1) {
            this.animateKeys = true;
        }
    }
}
