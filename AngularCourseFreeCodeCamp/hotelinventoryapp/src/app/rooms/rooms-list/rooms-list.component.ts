import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  // What the below line do @Input(): It will Make 'rooms' as a valid HTML property on 'hinv-rooms-list' HTML element,
  // so we can use property binding and send data from parent to child.
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('SimpleChanges : ', changes);
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
