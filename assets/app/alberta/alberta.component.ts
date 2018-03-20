import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from "@angular/core";
import { DataService } from '../data.service';

// MomentJS for date formatting
import * as _moment from 'moment';
const moment = _moment;

@Component({
    selector: 'app-alberta',
    templateUrl: './alberta.component.html',
    styleUrls: ['./alberta.component.scss']
})
export class AlbertaComponent implements OnInit, AfterViewInit {
	@ViewChild('datePicker') datePicker: ElementRef;

	data: any = {};

	startDate = new Date(2017, 10, 20);
    minDate = new Date(2017, 10, 20);
    maxDate = new Date();

	myDate:string;
    datePickerSelected:boolean=false;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
    	this.dataService.fetchData();
    }

    ngAfterViewInit() {}

	logValue() {
		console.log(this.datePicker.nativeElement.value);
	}

	// Function for listener event in the DOM to check for change in the date picker, to format that date so it can be retrieved from the database properly.
	dateChange() {
        this.dataService.myDate = moment(this.datePicker.nativeElement.value).format('L');
        console.log(this.dataService.myDate);
        this.dataService.fetchAllData();
        this.datePickerSelected = true;
    }

}