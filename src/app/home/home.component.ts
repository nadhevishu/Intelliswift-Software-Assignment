import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }
  time=new Date();

  ngOnInit(): void {
      setInterval(() => {
        this.time = new Date();
    }, 1000);

   
  }

  /*
  show(){
    var event = new Date();
    console.log(event.toLocaleString('en-GB', { timeZone: 'Europe/London' }));

  }
*/
  }
