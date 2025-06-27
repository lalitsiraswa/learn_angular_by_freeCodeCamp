import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  // What the below line do @Input(): It will Make 'rooms' as a valid HTML property on 'hinv-rooms-list' HTML element,
  // so we can use property binding and send data from parent to child.
  @Input() rooms: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {}
}
