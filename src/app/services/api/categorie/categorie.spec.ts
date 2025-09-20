import { TestBed } from '@angular/core/testing';

import { Categorie } from '../../../services/api/categorie/categorie';

describe('Categorie', () => {
  let service: Categorie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categorie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
