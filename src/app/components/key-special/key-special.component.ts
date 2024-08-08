import { Component, Input } from '@angular/core';
import { Key } from '../../models/key';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-key-special',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './key-special.component.html',
    styleUrl: './key-special.component.scss'
})
export class KeySpecialComponent {
    @Input() keyObject: Key = {
        row: 0,
        levels: 0,
        value: [],
        type: 0
    };
}
