import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  // Using Angular's signal for reactivity not need to modify the template because
  // it is already set up to work with signals. if you try to read the signal
  // directly in the template, you will get an error.
  // Instead, you can use the signal's value directly in the template.
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (
      this.enteredTitle.trim().length === 0 ||
      this.enteredSummary.trim().length === 0 ||
      this.enteredDate.trim().length === 0
    ) {
      return;
    }
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
