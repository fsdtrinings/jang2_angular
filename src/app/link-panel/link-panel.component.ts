import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-panel',
  templateUrl: './link-panel.component.html',
  styleUrls: ['./link-panel.component.css']
})
export class LinkPanelComponent implements OnInit {

  constructor() { }

 @Input() adminStatus:boolean=false;
  ngOnInit(): void {
  }

}
