import { Component, OnInit } from '@angular/core';
import { MYBOOKS } from "../../assets/data/myBooks";
import { bookInfo } from '../bookInfo';

@Component({
  selector: 'app-mahmodmahmod2019',
  templateUrl: './mahmodmahmod2019.component.html',
  styleUrls: ['./mahmodmahmod2019.component.css']
})
export class Mahmodmahmod2019Component implements OnInit {
   
  
myBooks=MYBOOKS;
bookSelected: bookInfo;

constructor() {}

ngOnInit(){

this.onButtonClick(0);

}

onButtonClick(index){
  this.bookSelected = {
    bookname:this.myBooks[index].bookname,
    author:this.myBooks[index].author,
    bookGenre:this.myBooks[index].bookGenre,
    year:this.myBooks[index].year,
    picture:this.myBooks[index].picture,   
  }
}
}