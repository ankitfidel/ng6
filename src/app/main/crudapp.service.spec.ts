import { TestBed, inject } from '@angular/core/testing';

import { CrudappService } from './crudapp.service';

describe('CrudappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudappService]
    });
  });

  it('should be created', inject([CrudappService], (service: CrudappService) => {
    expect(service).toBeTruthy();
  }));
});
