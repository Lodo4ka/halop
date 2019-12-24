import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-filter',
  templateUrl: './todoListPipe.component.html',
  styleUrls: ['./todoListPipe.component.scss']
})
export class TodoListPipe implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  all() {
    this.todoService.all();
  }

  completed() {
    this.todoService.completed();
  }

  notCompleted() {
    this.todoService.notCompleted();
  }

}
