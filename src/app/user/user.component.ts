//import { Component, computed, signal } from '@angular/core';
import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component'; // Assuming you have a User model defined in user.model.ts
//import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  imports: [CardComponent],
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
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // SECOND PART B WITH SIGNALS FOR ACCEPTING INPUTS
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  // output FUNCTION
  // select =  output.<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
