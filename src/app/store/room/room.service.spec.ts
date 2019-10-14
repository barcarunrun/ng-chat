import { TestBed, inject, async } from '@angular/core/testing';

import { RoomService } from './room.service';

describe('RoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created',
    inject([RoomService], (service: RoomService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should add item',
    async(
      inject([RoomService], (service: RoomService) => {
        service.addRoom({ prop: 'test' });
        service.rooms$.subscribe(rooms => expect(rooms.length).toBe(1));
      })
    )
  );
});
