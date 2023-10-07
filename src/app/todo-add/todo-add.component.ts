import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoServiceService } from '../services/todo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  viewTitle:string = "Add new Todo"

  todoForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private todoService: TodoServiceService, private route: Router){}

  addTodo(){
    this.todoService.addTodo(this.todoForm.value)
    .subscribe({
      next: (res) =>{
        console.log(res);
        this.route.navigateByUrl('home')
      },
      error: e=>{
        console.log(e);
        //this.errorMessage = e.error? e.error.errors.join('\r\n'): e.message;
      }
    })
  }

}
