import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTemplateComponent } from './players-template.component';

describe('PlayersTemplateComponent', () => {
  let component: PlayersTemplateComponent;
  let fixture: ComponentFixture<PlayersTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
