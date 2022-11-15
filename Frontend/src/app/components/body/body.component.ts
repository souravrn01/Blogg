import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

content:any = []




  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.getData()
    
  }
  getData(){
    this.apiService.getBloggdata().subscribe(res=>{
      this.content = res
  
      console.log('checking for content', this.content)
    })
  }
} 
