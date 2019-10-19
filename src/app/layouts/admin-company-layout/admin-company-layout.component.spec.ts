import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminLayoutCompanyComponent } from "./admin-company-layout.component";

describe("AdminLayoutCompanyComponent", () => {
  let component: AdminLayoutCompanyComponent;
  let fixture: ComponentFixture<AdminLayoutCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLayoutCompanyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
