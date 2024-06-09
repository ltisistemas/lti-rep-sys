/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientesF2Component } from './clientes-f2.component';

describe('ClientesF2Component', () => {
  let component: ClientesF2Component;
  let fixture: ComponentFixture<ClientesF2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesF2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
