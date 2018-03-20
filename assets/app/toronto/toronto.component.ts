import { Component, ElementRef, ViewChild } from "@angular/core";
import { DataService } from '../data.service';
// MomentJS for date formatting
import * as _moment from 'moment';
const moment = _moment;

@Component({
    selector: 'app-toronto',
    templateUrl: './toronto.component.html',
    styleUrls: ['./toronto.component.scss']
})
export class TorontoComponent {

    // Date picker variables
    @ViewChild('datePicker') datePicker: ElementRef;
    startDate = new Date(2017, 10, 20);
    minDate = new Date(2017, 10, 20);
    maxDate = new Date();
    myDate:string;
    datePickerSelected:boolean=false;

	data: any;

    constructor(private dataService: DataService) {
    	this.dataService.fetchData();
    }

    // Function for listener event in the DOM to check for change in the date picker, to format that date so it can be retrieved from the database properly.
    dateChange() {
        this.dataService.myDate = moment(this.datePicker.nativeElement.value).format('L');
        console.log(this.dataService.myDate);
        this.dataService.fetchAllData();
        this.datePickerSelected = true;
    }
}