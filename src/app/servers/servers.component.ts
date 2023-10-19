import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

allowNewServer = false;

  constructor() {
    // It's recommended not to have heavy logic here
    setTimeout(() => { this.allowNewServer = true}, 2000)
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
