import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationRecordsComponent } from './communication-records.component';

describe('CommunicationRecordsComponent', () => {
  let component: CommunicationRecordsComponent;
  let fixture: ComponentFixture<CommunicationRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
