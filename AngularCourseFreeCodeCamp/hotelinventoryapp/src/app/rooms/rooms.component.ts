import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 20;
  hideRooms: boolean = false;
  rooms: Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 203,
        roomType: 'Deluxe Room',
        amenities:
          'a comfortable bed with quality linens, a private bathroom with toiletries and towels, a TV, Wi-Fi access, air conditioning, and a desk.',
        price: 999,
        photos: 'http://www.leg.sample.com/order/start.php',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5453,
      },
      {
        roomNumber: 405,
        roomType: 'Deluxe Room',
        amenities:
          'a private bathroom with toiletries and towels, a TV, Wi-Fi access, air conditioning, and a desk.',
        price: 1999,
        photos: 'https://www.sample.info/?street=fly&decision=celery',
        checkinTime: new Date('12-Nov-2021'),
        checkoutTime: new Date('13-Nov-2021'),
        rating: 3.6234,
      },
      {
        roomNumber: 204,
        roomType: 'Private Suite Room',
        amenities:
          'a private bathroom with toiletries and towels, a TV, Wi-Fi access, air conditioning, and a desk.',
        price: 4999,
        photos: 'https://www.sample.info/?street=fly&decision=celery',
        checkinTime: new Date('13-Nov-2021'),
        checkoutTime: new Date('14-Nov-2021'),
        rating: 2.5657,
      },
      {
        roomNumber: 904,
        roomType: 'Single Bed Room',
        amenities:
          'a comfortable bed with quality linens, a private bathroom with toiletries and towels, a TV, Wi-Fi access, air conditioning, and a desk.',
        price: 500,
        photos: 'http://www.leg.sample.com/order/start.php',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.7345,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
