import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPage } from './passenger.dashboard.page';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

import { PassengerDashboardPage } from './passenger.dashboard.page';

describe('DashboardPage', () => {
  let component: PassengerDashboardPage;
  let fixture: ComponentFixture<PassengerDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
