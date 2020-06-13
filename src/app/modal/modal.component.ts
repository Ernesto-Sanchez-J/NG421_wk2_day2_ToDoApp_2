import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modelInstance: NgbModalRef;
  constructor(NgbModal: NgbModal) { }

  ngOnInit() {
  }

  close(){
    this.modelInstance.close('no');
  }

  yes(){
    this.modelInstance.close('yes');
  }


}
