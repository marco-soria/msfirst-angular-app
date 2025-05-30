//import { Component, computed, signal } from '@angular/core';
import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

//import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // FIRST PART WITH CLASSIC AND SIGNALS

  //selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // get imagePath() {
  //   //return 'assets/users/' + this.selectedUser.avatar;
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);
  // onSelectUser() {
  //   //console.log('Clicked');
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   //this.selectedUser = DUMMY_USERS[randomIndex];
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // SECOND PART A WITH INPUTS
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // SECOND PART B WITH SIGNALS FOR ACCEPTING INPUTS
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.id);
  }
}
