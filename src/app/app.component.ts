import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyCommonComponent } from './components/key-common/key-common.component';
import { Key } from './models/key';
import { KeySpecialComponent } from './components/key-special/key-special.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, KeyCommonComponent, KeySpecialComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    demoKey0: Key = { "row": 1, "levels": 2, "value": ["~", "`"], "type": 0 };
    demoKey1: Key = { "row": 2, "levels": 1, "value": ["Tab"], "type": 1 };
    demoKey2: Key = { "row": 1, "levels": 1, "value": ["Backspace"], "type": 2 };
    demoKey3: Key = { "row": 4, "levels": 1, "value": ["Shift"], "type": 3 };
    demoKey4: Key = { "row": 5, "levels": 1, "value": [""], "type": 4 };

    demoKey5: Key = { "row": 5, "levels": 1, "value": [""], "type": 5 };
}
