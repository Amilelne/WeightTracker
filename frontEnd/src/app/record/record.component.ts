import { Component, OnInit } from '@angular/core';
import { RecordService } from '../service/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class RecordComponent implements OnInit {
  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.recordService.getRecords().subscribe(records => {
      console.log(records);
    });
  }
}
