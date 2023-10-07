import { Component } from '@angular/core';
import { Todos } from '../models/todos';
import { HttpClient } from '@angular/common/http';
import { TodoServiceService } from '../services/todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private todoService: TodoServiceService){

  }
  readonly viewTitle:String = "Todo Lists"

  ngOnInit(){
    console.log("Init");
    this.todoService.getTodo().subscribe({
      next: v=>{
        
        for(const element of v.result){
          console.log(element);
          const mappedResp: Todos = {
              id: element.id,
              description : element.description,
              title: element.title,
              isEditMode: false,
              todoStatus: element.todoStatus
            }
            this.todos.push(mappedResp);
        }

    
        // console.log(mappedResp);
      }
    });
  }

  todos: Todos[]  = [] /*= [
    {
      id:1,
      title: 'Todo 1',
      description: `Special title treatment
      With supporting text below as a natural lead-in to additional content.`,
      isEditMode:false
    },

    {
      id:2,
      title: 'Todo 2',
      description: `Special title treatment
      With supporting text below as a natural lead-in to additional content.`,
      isEditMode:false
    },
    {
      id:3,
      title: 'Todo 3',
      description: `Special title treatment
      With supporting text below as a natural lead-in to additional content.`,
      isEditMode:false
    },
    {
      id:4,
      title: 'Todo 4',
      description: `Special title treatment
      With supporting text below as a natural lead-in to additional content.`,
      isEditMode:false
    }
  ];*/
}
