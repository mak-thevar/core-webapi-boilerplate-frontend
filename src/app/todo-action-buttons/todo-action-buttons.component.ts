import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../models/todos';

@Component({
  selector: 'app-todo-action-buttons',
  templateUrl: './todo-action-buttons.component.html',
  styleUrls: ['./todo-action-buttons.component.css']
})
export class TodoActionButtonsComponent {
  @Output() callEdit: EventEmitter<Todos> = new EventEmitter();
  @Output() callUpdate: EventEmitter<Todos> = new EventEmitter();
  @Output() callCompleted: EventEmitter<number> = new EventEmitter();

  @Input() localTodo:Todos = {};


  callEditMethod(todo:Todos){
    this.callEdit.emit(todo);
  }
  callCompletedMethod(todoId:number|undefined){
    this.callCompleted.emit(todoId);
  }

}
