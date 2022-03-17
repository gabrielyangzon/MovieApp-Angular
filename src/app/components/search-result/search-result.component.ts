import { Component, Input, OnInit , ViewChild } from '@angular/core';
import { Movie } from '../../models/movie'
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() dataSource : Movie 

  data : Movie 

  showModal : boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.data = this.dataSource
    
  }

  showDetails(){
    
    this.showModal = true;

  }

  closeModal(){

    this.showModal = false

  }

}
