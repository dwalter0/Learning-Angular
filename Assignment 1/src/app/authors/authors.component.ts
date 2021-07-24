import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  service: AuthorsService;
  constructor(_service: AuthorsService) { 
    this.service = _service
  }

  get authorList() {return  this.service.getAuthors();}
  
  

  ngOnInit(): void {
  }

}
