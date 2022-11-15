import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  data:any = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiService.getBloggdata().subscribe(res=>{
      this.data = res
    })
  }
}
