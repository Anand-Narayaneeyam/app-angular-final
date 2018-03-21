import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AppService]
})
export class ListComponent implements OnInit {

  dataArray: any;
  @Output() editEmit = new EventEmitter();
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    
    this.appService.getUsersList().subscribe(data => {
      
      if (data['Status'] == "success") {
        this.dataArray = data["Data"];
        this.editEmit.emit({ "Data": data["Data"][0] });
      }
      else
        alert("No Data Exits...");
    });
  }
  editClick(data) {
    this.editEmit.emit({ "Data": data });
  }
  deleteClick(id) {
    
    this.appService.deleteData(id).subscribe((data) => {
      
      alert("User Deleted");
      this.getData();
    });
  }

}
