import { Data } from "@angular/router";

export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Data;
    checkoutTime: Date;
}