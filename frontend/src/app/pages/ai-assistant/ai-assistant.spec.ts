import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIAssistant } from './ai-assistant';

describe('AIAssistant', () => {
  let component: AIAssistant;
  let fixture: ComponentFixture<AIAssistant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIAssistant],
    }).compileComponents();

    fixture = TestBed.createComponent(AIAssistant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
