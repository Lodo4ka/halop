import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo.model';

@Injectable()
export class TodoLocalStorageService {

  constructor() {
  }

  static getAll(): Todo[] {
    return JSON.parse(localStorage.getItem("todos"));
  }

  static loadData(todos: Todo[]) {
    return localStorage.setItem("todos", JSON.stringify(todos));
  }
}

