import { Component, Input } from '@angular/core';
import { Todos } from '../models/todos';
import { TodoServiceService } from '../services/todo-service.service';
import { TodoRequestModel } from '../models/todo-request-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoService: TodoServiceService){}

  @Input()
  todos:Todos[] =[];

  onContentChange(event: Event, index: number) {
    const newContent = (event.target as HTMLElement).textContent;
    if(newContent)
      this.todos[index].description = newContent;
  }
  

  edit(todo:Todos){
    todo.isEditMode = !todo.isEditMode;
    if(!todo.isEditMode){
      //Update the todo
      const todoReq:TodoRequestModel = {
        title: todo.title,
        description: todo.description
      }
      this.todoService.updateTodo(todo.id??1,todoReq).subscribe({
        next: v=>{
          console.log(v);
        }
      })
    }
  }
}
