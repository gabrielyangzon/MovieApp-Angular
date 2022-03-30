import { Component, Input, OnInit , ViewChild } from '@angular/core';
import { Movie , IMdb } from '../../models/movie'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  
  @Input() dataSource : IMdb 

  data : IMdb 

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
