import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  serverCreated = false;
  servers = ['Server 01', 'Server 02'];

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was successfully created! Server name is " + this.serverName + ".";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

}
