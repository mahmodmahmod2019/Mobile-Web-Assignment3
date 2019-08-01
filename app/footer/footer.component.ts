import { Component, OnInit } from '@angular/core';
import { Mahmodmahmod2019 } from "../mahmodmahmod2019";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
