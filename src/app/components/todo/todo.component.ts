import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

 @Input() todo: Todo;
 edit = false;
 name: string;
 description: string;
 status: boolean;

 constructor(private todoService: TodoService) { }

 ngOnInit() {
   this.status = this.todo.status;
 }

 onDelete(todo: Todo): void {
   this.todoService.deleteTodo(todo);
 }

 onEdit() {
   this.edit = !this.edit;
 }

 onSave(todo: Todo) {
   const newTodo: Todo = {
     id: todo.id,
     name: !this.name ? todo.name : this.name,
     description: !this.description ? todo.description : this.description,
     status: this.status,
     deleted: todo.deleted
   };
   this.todoService.updateTodo(newTodo);
 }

  onToggleCheckbox() {
    const newTodo = {
      ...this.todo,
      status: this.status
    }
    this.todoService.updateTodo(newTodo);
  }
}
