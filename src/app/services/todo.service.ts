import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 0;

  constructor(private ngbModal: NgbModal) {}

  addTodo(): void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: '',
    });

    this.todoTitle = '';
    this.todoId++;
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }

  async deleteTodo(todo: any) {
    const modal = this.ngbModal.open(ModalComponent);
    // const index = this.todoList.findIndex(todoItem => todoItem === todo);
    // this.todoList.splice(index, 1);
  }

  GetTodos() {
    return this.todoList;
  }
}
