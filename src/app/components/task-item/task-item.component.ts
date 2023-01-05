import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  constructor() {}

  ngOnInit() {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
}
