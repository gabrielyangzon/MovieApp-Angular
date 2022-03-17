import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Form, FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnInit {

  @Output() onChange = new EventEmitter()

  searchValue : FormControl = new FormControl('')

  constructor() { }

  ngOnInit(): void {

  }


  onChangeHandler(){
  
    this.onChange.emit(this.searchValue.value)
  }

}
