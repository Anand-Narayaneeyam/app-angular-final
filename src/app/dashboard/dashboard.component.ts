import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isShow: boolean = false;
  dataOutput: any;
  selectedId: any;
  @ViewChild(ListComponent) private list:ListComponent;
  constructor() { }

  ngOnInit() {
  }
  editClick(event) {
    
    this.selectedId = event["Data"]["_id"];
    this.dataOutput = event["Data"];
    this.isShow = true;
  }
  updateClick(event) {
    
    this.list.getData();
    alert("User details Updated");
  }
}
