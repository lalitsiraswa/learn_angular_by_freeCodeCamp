import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  // It’s typically used when you want to access methods, properties, or DOM elements of a child component from the parent component's TypeScript class.
  // When is it assigned?
  // Angular will automatically populate headerComponent after ngAfterViewInit() lifecycle hook.
  // If you try to use a @ViewChild reference before the view is initialized (e.g., in the constructor or ngOnInit()), the reference will be undefined.
  // @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // The { static: true } or { static: false } option tells Angular when to resolve the @ViewChild reference during the component’s lifecycle.
  // Setting static: true means:
  // Resolve the view query before Angular runs ngOnInit() — during the component's initialization phase.
  // This makes the @ViewChild available early, inside ngOnInit().
  // { static: true }: It indicates that this component(@ViewChild) is actually safe to use inside ngOnInit() lifecycle hook.
  // Use when the element/component is always present in the template (i.e., not inside *ngIf, *ngFor, etc.).

  // Setting static: false means:
  // Resolve the view query after Angular has fully initialized the view — after ngAfterViewInit().
  // The @ViewChild reference will not be available in ngOnInit(), only in ngAfterViewInit().
  // Use when the element/component is conditionally rendered, e.g., inside *ngIf, *ngFor, etc.
  title: string = 'Room List';
  hotelName = 'Hilton Hotel';
  numberOfRooms = 20;
  hideRooms: boolean = false;
  // ! (Definite Assignment Assertion)
  // This is the "definite assignment assertion operator" in TypeScript. It tells the compiler:
  // "Trust me, I will assign a value to this property before it’s used, even if it doesn't look like it right now."
  // Normally, TypeScript would complain if you don’t initialize a non-optional field:
  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  constructor() {}
  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {
    console.log('headerComponent: ', this.headerComponent);
    this.headerComponent.title = 'Welcome To Hilton Hotel';
  }
  ngDoCheck(): void {
    console.log('On ngDoCheck is Called!');
  }

  ngOnInit(): void {
    // console.log('headerComponent: ', this.headerComponent);
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
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    console.log(`Selected Room : ${JSON.stringify(room)}`);
    this.selectedRoom = room;
  }

  addRoom() {
    const newRoom: RoomList = {
      roomNumber: 901,
      roomType: 'Luxury Deluxe Room',
      amenities:
        'a comfortable bed with quality linens, a private bathroom with toiletries and towels, a TV, Wi-Fi access, air conditioning, and a desk.',
      price: 999,
      photos: 'http://www.leg.sample.com/order/start.php',
      checkinTime: new Date('13-Nov-2021'),
      checkoutTime: new Date('15-Nov-2021'),
      rating: 3.567,
    };
    // Whenever we are working with ChangeDetectionStrategy.OnPush, the data you are trying to assign should
    // not be mutable. So what we can do, rather than directly modifying the roomList, we have to
    // return a new object every time we modify it.

    // this.roomList.push(newRoom); // It will not work in case of ChangeDetectionStrategy.OnPush, means the changes will
    // not reflect to the child component.

    // spread operator (...)
    this.roomList = [...this.roomList, newRoom];
  }
}
