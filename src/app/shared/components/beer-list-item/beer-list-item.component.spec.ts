import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListItemComponent } from './beer-list-item.component';

describe('BeerListItemComponent', () => {
  let component: BeerListItemComponent;
  let fixture: ComponentFixture<BeerListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerListItemComponent]
    });
    fixture = TestBed.createComponent(BeerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
