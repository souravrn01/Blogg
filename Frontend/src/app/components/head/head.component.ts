import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
status = 'FOLLOW'
value:any = ''
  constructor() { }

  ngOnInit(): void { 
    this.random()
  }

  random(){
   let x =  Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
   this.value = x
  }

  change(){
    this.status = "FOLLOWING"
    this.value++
  }
}
