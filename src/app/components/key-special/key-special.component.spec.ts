import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySpecialComponent } from './key-special.component';

describe('KeySpecialComponent', () => {
    let component: KeySpecialComponent;
    let fixture: ComponentFixture<KeySpecialComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [KeySpecialComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(KeySpecialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
