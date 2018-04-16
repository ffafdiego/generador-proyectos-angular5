import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-<%= module %>',
  templateUrl: './<%= module %>.component.html',
  styleUrls: ['./<%= module %>.component.css']
})
export class <%= capModule %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
