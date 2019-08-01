import { Component, OnInit } from '@angular/core';
import { Mahmodmahmod2019 } from "../mahmodmahmod2019";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currStudent : Mahmodmahmod2019 = 
  {    
    sname: "Mahmod Mahmod", 
    sid: "991295924",
    scampus: "Trafaglr campus", 
    assignTitle: "Assignment3/Mobile Web Based Application",
    loginName:'mahmodmahmod2019' };


  constructor() { }

  ngOnInit() {
  }

}

