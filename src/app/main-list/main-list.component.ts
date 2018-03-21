import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  providers: [AppService]
})
export class MainListComponent implements OnInit {
  @Input() dataSet: any;
  firstName: string = "";
  lastName: string = "";
  dob: string = "";
  phoneNumber: string = "";
  gender: string = "";
  @Input() selectedId: any;
  @Output() updateEmit = new EventEmitter();

  constructor(private service: AppService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes != undefined) {
      
      if (changes.dataSet.currentValue) {
        this.firstName = changes.dataSet.currentValue.firstName;
        this.lastName = changes.dataSet.currentValue.lastName;
        this.dob = changes.dataSet.currentValue.dob;
        this.phoneNumber = changes.dataSet.currentValue.phoneNumber;
        this.gender = changes.dataSet.currentValue.gender;
      }
    }
  }

  onEditDetails(event) {
    
    this.service.updateData(event, this.selectedId).subscribe(data => {
      
      if (data["Status"] == "updated")
        this.updateEmit.emit({"Data": data["Data"]});
        else
        alert("Update failed...");
    });
  }

  resetClick(data?: NgForm) {
    if (data != null)
      data.reset();
  }

}
