import { Component, OnInit ,Input , OnChanges, SimpleChanges} from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnChanges {

  @Input() data : Movie[]

  constructor() { }

  Movies : Movie[] = []

  ngOnChanges(changes : SimpleChanges) : void {
    this.Movies = this.data

  }


  
 


}
