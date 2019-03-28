import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
    data: any;

  constructor(private http: HttpClient) {
    http.get(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe(result => { this.data = result });
  }

  ngOnInit() {
  }

  updatePostCall(details) {
    const body = {
      title:details.value,
      body: 'test data' + details.value,
      userId: 1   
    }
    this.http.post(`https://jsonplaceholder.typicode.com/posts/`, body)
      .subscribe(result => {
        this.data.splice(0, 0, result);
      });
  }

}
