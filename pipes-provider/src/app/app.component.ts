import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'pipes-provider';
  person = {
    firstName: 'Khim',
    lastName: 'Adhikari',
    title: 'SE'
  };

  files: File[];

  ngOnInit() {
    this.files = [
      {name: 'logo.svg', size: 212212, type: 'image/svg'},
      {name: 'background.svg', size: 432424, type: 'image/svg'},
      {name: 'test.pdf', size: 85858585, type: 'image/svg'},
      {name: 'file.txt', size: 545454, type: 'image/svg'},
    ];
  }
}

interface File {
  name: string;
  size: number;
  type: string;
}
