import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
// import { HttpClient, Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {
    HttpClient,
    HttpRequest,
    HttpEvent,
    HttpEventType
} from '@angular/common/http';

@Injectable()
export class DataService implements OnInit {
	data: any = {};
    allData: any = {};

	interval: any;

	allTable:boolean=true;
	abTable:boolean=false;
	toTable:boolean=false;
	moTable:boolean=false;
	vaTable:boolean=false;
	prTable:boolean=false;
	owtoTable:boolean=false;
	mlTable:boolean=false;
	brTable:boolean=false;

	myDate:string;
	noData:boolean=false;
	brisbaneData:boolean=false;

	public state:string = 'inactive';

	private apiData = new BehaviorSubject<any>(null);
	public apiData$ = this.apiData.asObservable();

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
		// this.fetchData();
		// this.interval = setInterval(() => { 
  //           this.fetchData(); 
  //       }, 1000);
	}

	// fetchData() {
	// 	return this.http.get('/api/data').map((data) => {
	// 		console.log('Fetching data...');
	// 		// console.log(data.json());
	// 		return data.json();
	// 	})
	// }

	fetchData() {
		this.http.get('/api/data')
			.subscribe(
				(data) => {
				// console.log('Fetching data...');
				// console.log(data.json());
				this.data = data;
				// console.log(this.data);
			}, (error) => {
				console.log('There was an error getting the data.')
			});
	}

	fetchAllData() {
	    this.http.get('https://api.mlab.com/api/1/databases/heroku_q1rgmlhw/collections/apidatas?q={"updated": "'+ this.myDate +'"}&apiKey=DqLhKCxvsNwutqc_kQEYhHPsY5J4gWZ5')
            .subscribe(
                (data) => {
                    this.allData = data;
                    console.log(this.allData);

                    if (this.allData.length === 0) {
                        console.log('No data for that date range.');
                        this.noData = true;
                    }
                    if (this.allData.length !== 0) {
                        this.noData = false;
                    }
                    if (this.allData.length === 0 && this.allData.br18Riders) {
                    	this.brisbaneData = false;
					}
                }, (error) => {
                    if (error) {
                        console.log('There was an error while getting all of the data.');
                    }
                }
            );
    }

	setData(data) {
		this.apiData.next(data);
		console.log('Setting data...')
	}

	toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

}
