import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {
    // It's recommended not to have heavy logic here
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
