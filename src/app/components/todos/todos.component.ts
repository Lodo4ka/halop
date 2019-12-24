import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo.model';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  edit: boolean = false;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  getAll(): Observable<Todo[]> {
    return of(this.todoService.getAllTodos().filter(todo => todo.deleted === false));
  }
}
