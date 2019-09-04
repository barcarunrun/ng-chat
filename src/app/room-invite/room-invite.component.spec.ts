import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInviteComponent } from './room-invite.component';

describe('RoomInviteComponent', () => {
  let component: RoomInviteComponent;
  let fixture: ComponentFixture<RoomInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
