import {Component, EventEmitter, Output} from '@angular/core';
import { Task } from '../../Task';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  showAddTask: any;
  subscription: any;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    });
  }

  text: any;
  day: any;
  reminder: boolean = false;

  onSubmit() {
    if (!this.text) {
      alert('Please add text');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
