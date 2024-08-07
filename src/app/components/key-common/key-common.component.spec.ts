import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCommonComponent } from './key-common.component';

describe('KeyCommonComponent', () => {
    let component: KeyCommonComponent;
    let fixture: ComponentFixture<KeyCommonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [KeyCommonComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(KeyCommonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
