import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  name: string;
  description: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  createTodo() {

    if(!this.name && !this.description) return;

    const newTodo: Todo = {
      id: this.todoService.getLastElement().id++,
      name: this.name,
      description: this.description,
      status: false,
      deleted: false
    }
    this.todoService.createTodo(newTodo);
    this.name = "";
    this.description = "";
  }
}
