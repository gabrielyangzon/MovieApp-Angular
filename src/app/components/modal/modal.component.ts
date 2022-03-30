import { Component, OnInit , ElementRef, ViewChild, Input , Output ,EventEmitter , OnChanges, SimpleChanges } from '@angular/core';
import { Movie , IMdb } from '../../models/movie';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges  {

  @Input() modalData : IMdb
  data : IMdb

  @ViewChild('showModalButton' , {static: false}) showModalButton : ElementRef

  @Output() closeModal = new EventEmitter()

  
  constructor() { }

  

  ngOnChanges(changes : SimpleChanges) : void {
    this.data = this.modalData
    console.log(this.data)
    let btn : HTMLElement = document.getElementById("btnShow") as HTMLElement
    btn.click();
  }

  closeModalHandler() {
    this.closeModal.emit();
  }

  ngOnInit(): void {
    
  }





  


 


}
