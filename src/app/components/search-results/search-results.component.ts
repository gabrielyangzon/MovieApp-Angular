import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(public service : DataService) { }

  test : number[] = [1,2,3,4,5]

  ngOnInit(): void {
    this.service.getMovies().subscribe()
  }


  
 


}
