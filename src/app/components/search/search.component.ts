import { Component, OnInit ,ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Movie } from '../../models/movie'

import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  constructor(public service : DataService) { }

  moviesSearched : Movie[] = []

  ngOnInit(): void {

  }

  onSearchValueChange(queryInput:any){
   
    if(queryInput !== "")
    {
      this.service.getMoviesFromJson().subscribe(m => {
        
            this.moviesSearched = m.filter(item => item.title.toLowerCase().indexOf(queryInput.toLowerCase()) >= 0)
            
      })
    }else{
       this.moviesSearched = []
    }
  }

}
