import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoomMainComponent } from "./room-layout.component";

describe("AdminLayoutComponent", () => {
  let component: RoomMainComponent;
  let fixture: ComponentFixture<RoomMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomMainComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
