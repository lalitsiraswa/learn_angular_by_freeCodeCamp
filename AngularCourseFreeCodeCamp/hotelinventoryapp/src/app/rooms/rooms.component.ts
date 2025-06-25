import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = "Hilton Hotel";
  numberOfRooms = 20;
  hideRooms: boolean = false;
  rooms: Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5
  }
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
