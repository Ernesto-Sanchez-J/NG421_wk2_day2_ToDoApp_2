import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 0;
  constructor(private ngbModal: NgbModal) {

  }
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [];
  }
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

}
