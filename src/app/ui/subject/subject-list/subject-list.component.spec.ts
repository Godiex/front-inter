import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SubjectListComponent} from "./subject-list.component";


describe('UserListComponent', () => {
  let component: SubjectListComponent;
  let fixture: ComponentFixture<SubjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
