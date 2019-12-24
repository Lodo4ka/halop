import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { TodoLocalStorageService } from './todoLocalStorage.service';

@Injectable()
export class TodoService {

  private todos = [
    {
      id: 1,
      name: 'Foo',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis repellat' +
        ' consectetur corporis optio quibusdam esse laborum a quasi mollitia quo, necessitatibus sint deleniti et' +
        ' nemo quaerat iste rem tempore eaque?',
      status: false,
      deleted: false
    }, {
      id: 2,
      name: 'Alisa',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ' +
        'Perspiciatis repellat consectetur corporis optio quibusdam esse laborum a quasi mollitia quo, necessitatibus sint deleniti ' +
        'et nemo quaerat iste rem tempore eaque?',
      status: true,
      deleted: false
    }
  ];

  constructor() {
    if(this.todos.length !== TodoLocalStorageService.getAll().length) {
      this.todos = TodoLocalStorageService.getAll();
    }
  }
   getAllTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.map(t => t.id === todo.id ? {...todo, deleted: true} : t);
    TodoLocalStorageService.loadData(this.todos);
  }

  updateTodo(newTodo: Todo) {
    this.todos = this.todos.map(todo => todo.id === newTodo.id ? {...newTodo} : todo);
    TodoLocalStorageService.loadData(this.todos);
  }

  all() {
    this.todos = TodoLocalStorageService.getAll();
  }

  completed() {
    this.todos = TodoLocalStorageService.getAll().filter(todo => todo.status === true);
  }

  notCompleted() {
    this.todos = TodoLocalStorageService.getAll().filter(todo => todo.status === false);
  }


  getLastElement(): Todo {
    return this.getAllTodos()[this.getAllTodos().length - 1];
  }

  createTodo(todo: Todo) {
    this.todos.push(todo);
    TodoLocalStorageService.loadData(this.todos);
  }
}
