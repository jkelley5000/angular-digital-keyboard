import { Component, effect, input, Input, Signal, signal } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
    selector: 'app-output-textarea',
    standalone: true,
    imports: [],
    templateUrl: './output-textarea.component.html',
    styleUrl: './output-textarea.component.scss'
})
export class OutputTextareaComponent {
    @Input() contentObject = signal('');

    content = signal('');

    constructor() {
        effect(() => {
            this.content = this.contentObject;
        })
    }

}
