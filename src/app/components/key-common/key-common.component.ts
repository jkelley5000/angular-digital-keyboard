import { Component, Input } from '@angular/core';
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
    @Input() keyObject: Key = {
        row: 0,
        levels: 0,
        value: [],
        type: 0
    };
}
