import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingComponent } from './app-routing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoListPipe } from './components/filter/todoListPipe.component';
import { TodosComponent } from './components/todos/todos.component'
import { TodoComponent } from './components/todo/todo.component'
import { TodoLocalStorageService } from './services/todoLocalStorage.service'
import { TodoService } from './services/todo.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    NotFoundComponent,
    DashboardComponent,
    TodoListPipe,
    TodosComponent,
    AddTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule
  ],
  providers: [TodoLocalStorageService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
