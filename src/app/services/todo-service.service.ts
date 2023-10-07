import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodoRequestModel } from '../models/todo-request-model';
import { Todos } from '../models/todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  baseEndPoint:string = environment.baseEndPoint;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  updateTodo(id:number,todo: TodoRequestModel){
    return this.http.put(`${this.baseEndPoint}/todos/${id}`,todo);
  }
  getTodo(): Observable<any>{
    return this.http.get(`${this.baseEndPoint}/todos`);
  }

  addTodo(todo:TodoRequestModel){
    return this.http.post(`${this.baseEndPoint}/todos`,todo);
  }
}
